// 丰富的图片数据集合 - 使用 Unsplash 高质量图片
const enrichedPhotoData = [
    // 自然风光系列
    {
        id: 1,
        title: "阿尔卑斯山日出",
        description: "金色阳光洒向雪山之巅，大自然的壮丽画卷",
        category: "nature",
        date: "2024-01-15",
        image: "https://images.unsplash.com/photo-1464822759844-d150baec43a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1464822759844-d150baec43a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "薰衣草田园",
        description: "紫色的浪漫海洋，芬芳的田园诗意",
        category: "nature",
        date: "2024-01-18",
        image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "挪威峡湾",
        description: "蓝天碧水间的自然奇迹，北欧的纯净之美",
        category: "nature",
        date: "2024-01-22",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        title: "热带雨林瀑布",
        description: "飞流直下的瀑布，热带雨林的生命力量",
        category: "nature",
        date: "2024-01-25",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        title: "樱花盛开",
        description: "粉色的浪漫春天，樱花飞舞的诗意时光",
        category: "nature",
        date: "2024-02-01",
        image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
        thumbnail: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },

    // 城市建筑系列
    {
        id: 6,
        title: "东京夜景",
        description: "繁华都市的璀璨灯火，现代文明的光辉",
        category: "city",
        date: "2024-01-20",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 7,
        title: "现代建筑群",
        description: "钢铁森林中的几何美学，现代建筑的艺术",
        category: "city",
        date: "2024-02-03",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 8,
        title: "布鲁克林大桥",
        description: "连接城市的纽带，工程与艺术的完美结合",
        category: "city",
        date: "2024-02-05",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 9,
        title: "街头艺术墙",
        description: "城市文化的表达，街头艺术的创意魅力",
        category: "city",
        date: "2024-02-08",
        image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
        thumbnail: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 10,
        title: "欧式古典建筑",
        description: "历史与艺术的交融，古典建筑的优雅魅力",
        category: "city",
        date: "2024-02-10",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2044&q=80",
        thumbnail: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },

    // 人像摄影系列
    {
        id: 11,
        title: "复古优雅女士",
        description: "黑白影像中的经典美丽，时光沉淀的优雅",
        category: "portrait",
        date: "2024-01-25",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80",
        thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 12,
        title: "自然光人像",
        description: "自然光下的真实美丽，捕捉最纯真的瞬间",
        category: "portrait",
        date: "2024-02-12",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80",
        thumbnail: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 13,
        title: "时尚男士肖像",
        description: "现代时尚的男性魅力，个性与风格的完美展现",
        category: "portrait",
        date: "2024-02-15",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 14,
        title: "儿童纯真笑容",
        description: "童年的纯真与快乐，最美好的时光记忆",
        category: "portrait",
        date: "2024-02-18",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
        thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 15,
        title: "艺术工作者",
        description: "专注创作的艺术家，灵感与才华的瞬间捕捉",
        category: "portrait",
        date: "2024-02-20",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1888&q=80",
        thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },

    // 美食摄影系列
    {
        id: 16,
        title: "精致法式甜点",
        description: "艺术般的法式甜点，色彩与味觉的双重享受",
        category: "food",
        date: "2024-02-01",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1981&q=80",
        thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 17,
        title: "意式咖啡时光",
        description: "浓郁的咖啡香气，慢生活的惬意时光",
        category: "food",
        date: "2024-02-22",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 18,
        title: "彩虹马卡龙",
        description: "色彩斑斓的马卡龙，甜蜜的法式浪漫",
        category: "food",
        date: "2024-02-25",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 19,
        title: "日式料理艺术",
        description: "精致的日式摆盘，料理与艺术的完美融合",
        category: "food",
        date: "2024-02-28",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80",
        thumbnail: "https://images.unsplash.com/photo-1553909489-cd47e0ef937a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 20,
        title: "手工面包房",
        description: "新鲜出炉的手工面包，温暖的家庭味道",
        category: "food",
        date: "2024-03-02",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
        thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },

    // 更多自然风光
    {
        id: 21,
        title: "冰岛蓝湖",
        description: "神秘的地热温泉，大自然的蓝色奇迹",
        category: "nature",
        date: "2024-03-05",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 22,
        title: "沙漠星空",
        description: "无垠沙漠上的璀璨星河，宇宙的深邃美丽",
        category: "nature",
        date: "2024-03-08",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
        thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 23,
        title: "秋日枫叶林",
        description: "金秋十月的枫叶林，大自然的调色板",
        category: "nature",
        date: "2024-03-10",
        image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 24,
        title: "巴厘岛海滩",
        description: "热带天堂的碧海蓝天，度假胜地的宁静美好",
        category: "nature",
        date: "2024-03-12",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },

    // 更多城市风光
    {
        id: 25,
        title: "巴黎埃菲尔铁塔",
        description: "浪漫之都的地标建筑，永恒的法式优雅",
        category: "city",
        date: "2024-03-15",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 26,
        title: "威尼斯水城",
        description: "水上城市的浪漫情怀，古典与现代的完美融合",
        category: "city",
        date: "2024-03-18",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2083&q=80",
        thumbnail: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 27,
        title: "新加坡天际线",
        description: "现代都市的完美规划，花园城市的未来感",
        category: "city",
        date: "2024-03-20",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        thumbnail: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 28,
        title: "伦敦大本钟",
        description: "英伦古典建筑的代表，历史与传统的象征",
        category: "city",
        date: "2024-03-22",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },

    // 更多人像作品
    {
        id: 29,
        title: "街头音乐家",
        description: "街头艺术家的专注表演，音乐与生活的美好结合",
        category: "portrait",
        date: "2024-03-25",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 30,
        title: "职业女性",
        description: "现代职场女性的自信魅力，独立与优雅并存",
        category: "portrait",
        date: "2024-03-28",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80",
        thumbnail: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },

    // 更多美食作品
    {
        id: 31,
        title: "意式披萨",
        description: "传统意式披萨的诱人香气，地中海的热情味道",
        category: "food",
        date: "2024-03-30",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 32,
        title: "精酿啤酒",
        description: "手工精酿的琥珀色泽，现代酿造工艺的完美体现",
        category: "food",
        date: "2024-04-02",
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];

// 导出丰富的图片数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = enrichedPhotoData;
} else {
    window.enrichedPhotoData = enrichedPhotoData;
}
