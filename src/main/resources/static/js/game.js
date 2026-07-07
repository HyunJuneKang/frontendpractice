let jobTimer = null;
let currentProcess = null;

$(()=>{
    init();
});
//init

function init(){
    loadSkillActionCache();
    renderGameScreen();
    bindEvent();
}
//스킬 데이터 로드
function loadSkillActionCache(){
    $.ajax({
        url:"/api/skills",
        type:"GET",
        success: function(data){
            console.log(data);
        },
        error: function () {
            console.log("스킬 데이터 로딩 실패");
        }
    })
}
//화면 렌더링
function renderGameScreen() {
    renderCombatScreen();
    renderAllJobScreen();
}
//전투화면 렌더링
function renderCombatScreen() {
    renderPlayerInfo();
    renderPlayerStatusInfo();
}
//스킬 화면 렌더링
function renderAllJobScreen() {
    renderJobScreen("woodcutting");
    renderJobScreen("fishing");
    renderJobScreen("mining");
    renderJobScreen("cooking");
}

function renderPlayerInfo() {
    $(".player-panel .combat-info-header").html(`
        <div class="combat-info-health-card">
            <div class="combat-bar">
                <div class="combat-info-health-bar" style="width: ${player.hp / player.maxHp * 100}%"></div>
            </div>
            <div class="combat-bar-label">
                <span>❤️</span>
                <span class="health-value">${player.hp}/${player.maxHp}</span>
            </div>
        </div>

        <div class="combat-info-attack-duration-card">
            <div class="combat-bar">
                <div class="combat-info-attack-duration-bar"></div>
            </div>
            <div class="combat-bar-label">
                <span>공격 간격:</span>
                <span class="attack-duration-value">${player.attackDuration}초</span>
            </div>
        </div>
    `);
}
function renderPlayerStatusInfo(){
    $(".player-panel .combat-info-body").html(`
    <div class="combat-status-row">
        <span class="status-name">⚔️ 최소 공격력</span>
        <span class="status-value">${player.minDamage}</span>
    </div>
    <div class="combat-status-row">
        <span class="status-name">⚔️ 최대 공격력</span>
        <span class="status-value">${player.maxDamage}</span>
    </div>
    <div class="combat-status-row">
        <span class="status-name">🛡️ 방어력</span>
        <span class="status-value">${player.defence}</span>
    </div>
`);
}
//스킬 세부 화면 렌더링
function renderJobScreen(skillName) {
    const skillList = skillData[skillName];

    const $container = $(`#${skillName}-section .active-card-container`);

    $container.empty();

    skillList.forEach((p) => {
        $container.append(`
            <button type="button" class="card" data-skill="${skillName}" data-id="${p.id}">
                <div>${p.name} ${p.icon}</div>
                <div>필요 레벨: ${p.requiredLevel}</div>
                <div>${p.gainExp} exp</div>
                <div>획득 아이템 id: ${p.gainItemId}</div>
                <div>수량: ${p.gainItemAmount}</div>
                <div class="progress-bar">
                    <div class="progress-bar-fill"></div>
                </div>
            </button>
        `);
    });
}
// 버튼 이벤트
function bindEvent(){
    $(".sidebar-section-title-button-hide").on("click",handleToggleSectionButtons);
    $(".sidebar-button").on("click",handleRenderSectionScreen);
    $(".active-card-container .card").on("click",handleChangeProcess);
}
//handler
function handleToggleSectionButtons(e) {
    const containerId = $(e.currentTarget).data("container");
    toggleButtonContents(containerId);
}
function handleRenderSectionScreen(e){
    const sectionId = $(e.currentTarget).data("target");
    switchSectionScreen(sectionId);
}
function handleChangeProcess(e){
    clearTimeout(jobTimer)
    const process= switchChangeProcess($(e.currentTarget));
    startJobLoop(process);
}
//Events
//작업 반복
function switchChangeProcess($currentTarget){
    const skillType = $currentTarget.data("skill");
    const skillId = $currentTarget.data("id");
    const currentSkill = skillData[skillType].find((p) =>
        String(p.id) === String(skillId)
    );
    currentProcess = {
        $target: $currentTarget,
        id:  currentSkill.id,
        duration: currentSkill.requiredTimeMs
    }
    const $bar = $currentTarget.find(".progress-bar-fill");

    $bar.css("--job-duration", currentProcess.duration + "ms");

    console.log("현재 교체한 스킬: ",currentSkill);
    return currentProcess;
}
function renderJobProcess(process){
    $(".progress-bar-fill").removeClass("active");
    const $bar = process.$target.find(".progress-bar-fill");
    void $bar[0].offsetWidth;
    $bar.addClass("active");
}
function startJobLoop(process) {

    renderJobProcess(process);
    jobTimer = setTimeout(()=>{
        if (process !== currentProcess) {
            return;
        }
        //보상 지금 위치

        //알림
        showToast(process);
        startJobLoop(process);
    } ,process.duration)
}
function showToast(process){
    const $toast = $(`
            <div class="toast">
                ㅋㅋ
            </div>
        `)
    $("#toast-container").append($toast);
    setTimeout(() => {
        $toast.remove();
    }, 3000);
}
//화면 변경
function switchSectionScreen(sectionId){
    const $targetSection = $("#"+sectionId);
    $(".content-section").addClass("hidden"); //모든 화면에 hidden 추가
    $targetSection.removeClass("hidden"); //보여줄 화면에 hidden 제거
    //헤더정보 변경
    console.log(sectionId,"변경 완료");
}
//사이드바 숨기기
function toggleButtonContents(containerId){
    const $targetContainer = $("#" + containerId);
    $targetContainer.toggleClass("hidden");
    console.log(containerId,"토글 완료");
}
