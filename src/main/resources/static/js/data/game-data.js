const woodcuttingList = [
    {
        id: "1",
        name: "참나무 베기",
        icon: "🌳",
        requiredLevel: "1",
        requiredTimeMs: 3000,
        gainExp: 10,
        gainItemId: 51,
        gainItemAmount: 1
    },
    {
        id: "2",
        name: "야자수 베기",
        icon: "🌴",
        requiredLevel: "10",
        requiredTimeMs: 4000,
        gainExp: 20,
        gainItemId: 52,
        gainItemAmount: 1
    },
    {
        id: "3",
        name: "트리 베기",
        icon: "🎄",
        requiredLevel: "20",
        requiredTimeMs: 4000,
        gainExp: 30,
        gainItemId: 53,
        gainItemAmount: 1
    },
    {
        id: "4",
        name: "침엽수 베기",
        icon: "🌲",
        requiredLevel: "30",
        requiredTimeMs: 5000,
        gainExp: 40,
        gainItemId: 54,
        gainItemAmount: 1
    }
];

const fishingList = [
    {
        id: "11",
        name: "강낚시",
        icon: "🐟",
        requiredLevel: "1",
        requiredTimeMs: 5000,
        gainExp: 10,
        gainItemId: 61,
        gainItemAmount: 1
    },
    {
        id: "12",
        name: "연못낚시",
        icon: "🐠",
        requiredLevel: "5",
        requiredTimeMs: 5000,
        gainExp: 18,
        gainItemId: 62,
        gainItemAmount: 1
    },
    {
        id: "13",
        name: "바다낚시",
        icon: "🐡",
        requiredLevel: "12",
        requiredTimeMs: 7000,
        gainExp: 35,
        gainItemId: 63,
        gainItemAmount: 1
    },
    {
        id: "14",
        name: "심해낚시",
        icon: "🦈",
        requiredLevel: "25",
        requiredTimeMs: 7000,
        gainExp: 70,
        gainItemId: 64,
        gainItemAmount: 1
    }
];

const miningList = [
    {
        id: "21",
        name: "돌 채광",
        icon: "🪨",
        requiredLevel: "1",
        requiredTimeMs: 5000,
        gainExp: 10,
        gainItemId: 71,
        gainItemAmount: 1
    },
    {
        id: "22",
        name: "구리 채광",
        icon: "⛏️",
        requiredLevel: "5",
        requiredTimeMs: 5000,
        gainExp: 18,
        gainItemId: 72,
        gainItemAmount: 1
    },
    {
        id: "23",
        name: "철 채광",
        icon: "⚒️",
        requiredLevel: "12",
        requiredTimeMs: 5000,
        gainExp: 35,
        gainItemId: 73,
        gainItemAmount: 1
    },
    {
        id: "24",
        name: "금 채광",
        icon: "🪙",
        requiredLevel: "25",
        requiredTimeMs: 5000,
        gainExp: 70,
        gainItemId: 74,
        gainItemAmount: 1
    }
];

const cookingList = [
    {
        id: "31",
        name: "생선 굽기",
        icon: "🐟",
        requiredLevel: "1",
        requiredTimeMs: 2000,
        gainExp: 10,
        gainItemId: 81,
        gainItemAmount: 1
    },
    {
        id: "32",
        name: "새우 요리",
        icon: "🦐",
        requiredLevel: "5",
        requiredTimeMs: 2000,
        gainExp: 18,
        gainItemId: 82,
        gainItemAmount: 1
    },
    {
        id: "33",
        name: "스테이크 굽기",
        icon: "🥩",
        requiredLevel: "12",
        requiredTimeMs: 2000,
        gainExp: 35,
        gainItemId: 83,
        gainItemAmount: 1
    },
    {
        id: "34",
        name: "특제 요리",
        icon: "🍲",
        requiredLevel: "25",
        requiredTimeMs: 2000,
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

const player = {
    hp:100,
    maxHp:100,
    attackDuration:4,
    minDamage:4,
    maxDamage:20,
    defence:1
}
const playerInventory = [

]
const woodcuttingItemList = [
    {
        id: "51",
        name: "참나무",
        icon: "🪵"
    },
    {
        id: "52",
        name: "야자수",
        icon: "🪵"
    },
    {
        id: "53",
        name: "트리",
        icon: "🪵"
    },
    {
        id: "54",
        name: "침엽수",
        icon: "🪵"
    }
]