// 로드
$(() => {
    init();
});

// 처음 실행
function init() {
    bindEvent();
}

// 버튼 이벤트 추가
function bindEvent() {
    $("#button-start").on("click", function () {
        const targetScreen = $(this).data("target");
        moveScreen(targetScreen);
    });

    $("#save-section .card").on(
        "click",
        handleSaveSelectMenu
    );

    // 동적으로 생성된 세이브 카드까지 처리
    $("#load-section").on(
        "click",
        ".card",
        handleLoadSelectMenu
    );
}

// 세이브 선택 화면 이벤트
async function handleSaveSelectMenu() {
    const selectType = $(this).data("target");

    switch (selectType) {
        case "newGame-section":
            await startNewGame();
            break;

        case "load-section":
            moveScreen(selectType);
            await renderPlayerData();
            break;

        case "main-section":
            moveScreen(selectType);
            break;
    }
}

// 플레이어 목록 조회 및 렌더링
async function renderPlayerData() {
    const $saveList = $("#save-list");

    try {
        const players = await $.ajax({
            url: "/players/list",
            type: "GET",
            dataType: "json"
        });

        // 다시 불러올 때 중복 카드가 생기지 않도록 초기화
        $saveList.empty();

        if (!players || players.length === 0) {
            $saveList.append(`
                <div class="empty-save">
                    저장된 게임이 없습니다.
                </div>
            `);

            return;
        }

        players.forEach(function (player) {
            $saveList.append(`
                <div class="card save-card"
                     data-player-id="${player.playerId}">
                    <h3>플레이어 ${player.playerId}</h3>
                    <p>레벨: ${player.level}</p>
                </div>
            `);
        });

    } catch (error) {
        console.error("플레이어 목록 조회 실패", error);
    }
}

// 불러오기 화면 카드 클릭
async function handleLoadSelectMenu() {
    const target = $(this).data("target");
    const playerId = $(this).data("player-id");

    // 뒤로 가기 카드
    if (target === "main-section") {
        moveScreen(target);
        return;
    }

    // 세이브 카드가 아니면 종료
    if (playerId == null) {
        return;
    }

    await loadSavedGame(playerId);
}

/*
새 게임
플레이어 INSERT
→ 서버 세션에 currentPlayerId 저장
→ 게임 화면 이동
*/
async function startNewGame() {
    try {
        const player = await createPlayer();

        if (!player?.playerId) {
            throw new Error(
                "생성된 플레이어 ID가 없습니다."
            );
        }

        console.log(
            "플레이어 생성 및 세션 저장 완료",
            player
        );

        location.href = "/game";

    } catch (error) {
        console.error("새 게임 시작 에러", error);
    }
}

function createPlayer() {
    return $.ajax({
        url: "/players",
        type: "POST",
        dataType: "json"
    });
}

/*
기존 플레이어 선택
→ 세션의 currentPlayerId 변경
→ 게임 화면 이동
*/
async function loadSavedGame(playerId) {
    try {
        const player = await selectPlayer(playerId);

        console.log(
            "플레이어 로드 및 세션 저장 완료",
            player
        );

        location.href = "/game";

    } catch (error) {
        console.error("불러오기 에러", error);
    }
}

function selectPlayer(playerId) {
    return $.ajax({
        url: `/players/${playerId}/select`,
        type: "POST",
        dataType: "json"
    });
}

// 화면 이동
function moveScreen(targetScreen) {
    const $currentScreen = $(".screen.active");
    const $targetScreen = $("#" + targetScreen);

    if ($targetScreen.length === 0) {
        console.error(
            "이동할 화면이 없습니다:",
            targetScreen
        );
        return;
    }

    $currentScreen.addClass("move-left");

    $currentScreen.one("transitionend", function () {
        $currentScreen.removeClass(
            "active move-left"
        );

        $targetScreen.addClass("active");
    });
}