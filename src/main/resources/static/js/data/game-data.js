const woodcuttingList = [
    {
        id: "1",
        name: "참나무",
        icon: "🌳",
        requiredLevel: "1",
        gainExp: 10,
        gainItemId: 51,
        gainItemAmount: 1
    },
    {
        id: "2",
        name: "야자수",
        icon: "🌴",
        requiredLevel: "10",
        gainExp: 20,
        gainItemId: 52,
        gainItemAmount: 1
    },
    {
        id: "3",
        name: "트리",
        icon: "🎄",
        requiredLevel: "20",
        gainExp: 30,
        gainItemId: 53,
        gainItemAmount: 1
    },
    {
        id: "4",
        name: "침엽수",
        icon: "🌲",
        requiredLevel: "30",
        gainExp: 40,
        gainItemId: 54,
        gainItemAmount: 1
    }
];

const fishingList = [
    {
        id: "1",
        name: "강낚시",
        icon: "🐟",
        requiredLevel: "1",
        gainExp: 10,
        gainItemId: 61,
        gainItemAmount: 1
    },
    {
        id: "2",
        name: "연못낚시",
        icon: "🐠",
        requiredLevel: "5",
        gainExp: 18,
        gainItemId: 62,
        gainItemAmount: 1
    },
    {
        id: "3",
        name: "바다낚시",
        icon: "🐡",
        requiredLevel: "12",
        gainExp: 35,
        gainItemId: 63,
        gainItemAmount: 1
    },
    {
        id: "4",
        name: "심해낚시",
        icon: "🦈",
        requiredLevel: "25",
        gainExp: 70,
        gainItemId: 64,
        gainItemAmount: 1
    }
];

const miningList = [
    {
        id: "1",
        name: "돌 채광",
        icon: "🪨",
        requiredLevel: "1",
        gainExp: 10,
        gainItemId: 71,
        gainItemAmount: 1
    },
    {
        id: "2",
        name: "구리 채광",
        icon: "⛏️",
        requiredLevel: "5",
        gainExp: 18,
        gainItemId: 72,
        gainItemAmount: 1
    },
    {
        id: "3",
        name: "철 채광",
        icon: "⚒️",
        requiredLevel: "12",
        gainExp: 35,
        gainItemId: 73,
        gainItemAmount: 1
    },
    {
        id: "4",
        name: "금 채광",
        icon: "🪙",
        requiredLevel: "25",
        gainExp: 70,
        gainItemId: 74,
        gainItemAmount: 1
    }
];

const cookingList = [
    {
        id: "1",
        name: "생선 굽기",
        icon: "🐟",
        requiredLevel: "1",
        gainExp: 10,
        gainItemId: 81,
        gainItemAmount: 1
    },
    {
        id: "2",
        name: "새우 요리",
        icon: "🦐",
        requiredLevel: "5",
        gainExp: 18,
        gainItemId: 82,
        gainItemAmount: 1
    },
    {
        id: "3",
        name: "스테이크 굽기",
        icon: "🥩",
        requiredLevel: "12",
        gainExp: 35,
        gainItemId: 83,
        gainItemAmount: 1
    },
    {
        id: "4",
        name: "특제 요리",
        icon: "🍲",
        requiredLevel: "25",
        gainExp: 70,
        gainItemId: 84,
        gainItemAmount: 1
    }
];

const skillData = {
    woodcutting: woodcuttingList,
    fishing: fishingList,
    mining: miningList,
    cooking: cookingList
};