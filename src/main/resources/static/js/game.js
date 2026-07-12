// =========================
// 전벽 변수 설정
// =========================
let jobTimer = null;
let currentProcess = null;
let currentPlayer = null;
let skillActionData = [];
$(()=>{
    init();
});
// =========================
// init ()
// =========================
async function init() {
    try {
        await loadGameData();
        renderGameScreen();
        bindEvent();
    } catch (error) {
        if (error.status === 401) {
            location.href = "/";
            return;
        }

        console.error("게임 초기화 실패", error);
    }
}
// =========================
// DB 데이터 로드 및 렌더링
// =========================
async function loadGameData() {
    // 1. 세션에 선택된 플레이어 조회
    currentPlayer = await loadCurrentPlayer();

    console.log("현재 플레이어", currentPlayer);

    // 2. 전체 스킬 액션 데이터 조회
    skillActionData = await loadSkills();

    // 3. 플레이어 기준으로 사용 가능 여부를 계산
    // skillActionData = skills.map(function (skill) {
    //     return {
    //         ...skill,
    //         unlocked: currentPlayer.level >= skill.requiredLevel
    //     };
    // });

}
function loadCurrentPlayer() {
    return $.ajax({
        url: "/games/current",
        type: "GET",
        dataType: "json"
    });
}

function loadSkills() {
    return $.ajax({
        url: "/api/skills",
        type: "GET",
        dataType: "json"
    });
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
    renderJobScreen("woodcutting", skillActionData.filter((p) => p.skillType === "woodcutting"));
    renderJobScreen("fishing", skillActionData.filter((p) => p.skillType === "fishing"));
    renderJobScreen("mining", skillActionData.filter((p) => p.skillType === "mining"));
    renderJobScreen("cooking", skillActionData.filter((p) => p.skillType === "cooking"));
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
function renderJobScreen(skillName, skillList) {
    const $container = $(`#${skillName}-section .active-card-container`);
    $container.empty();
    skillList.forEach((p) => {
        const icon = skillIconData[skillName][`${p.actionId}`] ?? "";
        $container.append(`
            <button type="button" class="card" data-skill="${skillName}" data-id="${p.actionId}">
                <div class="job-icon">${icon}</div>
                <div>${p.actionName}</div>
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

// =========================
// 버튼 이벤트 할당
// =========================
function bindEvent(){
    $(".sidebar-section-title-button-hide").on("click",handleToggleSectionButtons);
    $(".sidebar-button").on("click",handleRenderSectionScreen);
    $(".active-card-container").on("click", ".card", handleChangeProcess);
}
// =========================
// 버튼 이벤트 핸들러
// =========================
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
    const process= changeCurrentProcess($(e.currentTarget));
    renderHeaderScreen(process);
    startJobLoop(process);
}
// =========================
// 작업 카드 변경
// =========================
//작업 변경 -> 현재 작업 변경
function changeCurrentProcess($currentTarget){
    const skillId = $currentTarget.data("id");
    const currentSkill = skillActionData.find((p) =>
        String(p.actionId) === String(skillId)
    );
    currentProcess = {
        $target: $currentTarget,
        id:  currentSkill.actionId,
        skillType : currentSkill.skillType,
        icon: skillIconData[currentSkill.skillType][currentSkill.actionId],
        name: currentSkill.actionName,
        gainExp: currentSkill.gainExp,
        duration: currentSkill.requiredTimeMs
    }
    const $bar = $currentTarget.find(".progress-bar-fill");

    $bar.css("--job-duration", currentProcess.duration + "ms");

    console.log("현재 교체한 스킬: ",currentSkill);
    return currentProcess;
}
//작업 변경 -> 헤더 변경
function renderHeaderScreen(process) {
    const $mainHeader = $("."+"main-header");

    const stateClasses = ($mainHeader.attr("class") ?? "")
        .split(/\s+/)
        .filter((className) =>
            className.startsWith("main-header--")
        );
    $mainHeader
        .removeClass(stateClasses.join(" "))
        .addClass(`main-header--${process.skillType}`);
    $mainHeader
        .find(".main-header__icon")
        .text(process.icon);
    $mainHeader
        .find(".main-header__description")
        .text(process.skillType);
}
//작업 변경 -> 프로세스 바 변경
function renderJobProcess(process){
    $(".progress-bar-fill").removeClass("active");
    const $bar = process.$target.find(".progress-bar-fill");
    void $bar[0].offsetWidth;
    $bar.addClass("active");
}
//작업 변경 -> 작업 반복문 실행
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
//작업 변경 -> 작업 반복문 실행 -> 토스트바 설정
function showToast(process){
    const $toastContainer = $("#" +"toast-container");
    $toastContainer.removeClass("hidden");
    const $toast = $(`
            <div class="toast">
                ${process.icon}<br>
                ${process.name}<br>
                +${process.gainExp}exp
            </div>
        `)
    $toastContainer.append($toast);
    setTimeout(() => {
        $toast.remove();
        $toastContainer.addClass("hidden");
    }, 3000);
}

// =========================
// 작업 탭 변경
// =========================
//작업 탭 변경 -> 화면 변경
function switchSectionScreen(sectionId){
    const $targetSection = $("#"+sectionId);
    $(".content-section").addClass("hidden"); //모든 화면에 hidden 추가
    $targetSection.removeClass("hidden"); //보여줄 화면에 hidden 제거
    //헤더정보 변경
    console.log(sectionId,"변경 완료");
}
// =========================
// 사이드바 숨기기
// =========================
//사이드바 숨기기
function toggleButtonContents(containerId){
    const $targetContainer = $("#" + containerId);
    $targetContainer.toggleClass("hidden");
    console.log(containerId,"토글 완료");
}
