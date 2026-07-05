$(()=>{
    bindEvent();
});
// 버튼 이벤트
function bindEvent(){
    $(".sidebar-section-title-button-hide").on("click",handleToggleSectionButtons);
    $(".sidebar-button").on("click",handleRenderSectionScreen);
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
//Events
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