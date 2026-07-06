$(()=>{
    init();
});
//init
function init(){
    renderGameScreen();
    bindEvent();
}
//화면 렌더링
function renderGameScreen() {
    renderSkillScreen();
}
//스킬 화면 렌더링
function renderSkillScreen(){
    renderWoodcuttingScreen();
}
//스킬 세부 화면 렌더링
function renderWoodcuttingScreen() {
    woodcuttingList.forEach((p)=>{
        $(".active-card-container").append(`
            <button type="button" id="tree-1" class="card" data-id="${p.id}">
            <div>${p.name} ${p.icon}</div>
            <div>${p.gainExp}exp</div>
            <div>휙득 아이템 id:${p.gainItemId}</div>
            <div>수량 : ${p.gainItemAmount}</div>
            <div class="progress-bar progress-bar"> </div>
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
    switchChangeProcess($(e.currentTarget).data("id"));
}
//Events
//화면 변경
function switchSectionScreen(sectionId){
    const $targetSection = $("#"+sectionId);
    $(".content-section").addClass("hidden"); //모든 화면에 hidden 추가
    $targetSection.removeClass("hidden"); //보여줄 화면에 hidden 제거
    //헤더정보 변경
    console.log(sectionId,"변경 완료");
}
function switchChangeProcess(){
    //
}
//사이드바 숨기기
function toggleButtonContents(containerId){
    const $targetContainer = $("#" + containerId);
    $targetContainer.toggleClass("hidden");
    console.log(containerId,"토글 완료");
}