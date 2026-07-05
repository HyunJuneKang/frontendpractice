//로드
$(() => {
    init();
});
//처음 실행
function init(){
    bindEvent();
}
//버튼 이벤트추가
function bindEvent() {
    $("#button-start").on("click",function(){
        const targetScreen = $(this).data("target");
        moveScreen(targetScreen);
    });
    $("#save-section .card").on("click",handleSaveSelectMenu);
    $("#load-section .card").on("click",handleLoadSelectMenu);
}
// 이벤트 handler
function handleSaveSelectMenu() {
    const selectType = $(this).data("target");
    switch(selectType){
        case "game-section":
            //데이터로딩
            //새 게임 html로 이동
            location.href = "html/game.html";
            break;
        case "load-section":
            //세이브데이터 렌더링
            moveScreen(selectType);
            break;
        case "main-section":
            moveScreen(selectType);
            break;
    }
}
function handleLoadSelectMenu() {
    const selectType = $(this).data("target");
    switch(selectType){
        case "main-section":
            moveScreen(selectType);
            break;
    }
}

//common
/*
화면을 동적으로 제어하는 함수
현재화면을 왼쪽으로 옮긴 후 , 스크린 non-active로 변경
불러올 화면을 active 변경후 오른쪽으로 옮긴다.
 */
function moveScreen(targetScreen) {
    const $currentScreen = $(".screen.active");
    const $targetScreen = $("#" + targetScreen);

    $currentScreen.addClass("move-left");

    $currentScreen.one("transitionend", function () {
        $currentScreen.removeClass("active move-left");
        $targetScreen.addClass("active");
    });
}
