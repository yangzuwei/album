// Unsplash API 集成
class UnsplashAPI {
    constructor() {
        // 使用 Unsplash Source API (无需密钥)
        this.baseUrl = 'https://source.unsplash.com';
        this.apiUrl = 'https://api.unsplash.com';
        // 注意：生产环境建议申请自己的 Access Key
        this.accessKey = 'demo'; // 这里可以放你的 Unsplash Access Key
    }

    // 获取指定尺寸的随机图片
    getRandomImage(width = 800, height = 600, query = '') {
        const queryParam = query ? `?${query}` : '';
        return `${this.baseUrl}/${width}x${height}${queryParam}`;
    }

    // 获取特定分类的图片
    getCategoryImage(category, width = 800, height = 600) {
        const categoryMap = {
            nature: 'nature,landscape,mountains,forest,ocean',
            city: 'city,urban,architecture,building,street',
            portrait: 'portrait,people,person,face,model',
            food: 'food,cooking,restaurant,meal,dish'
        };
        
        const query = categoryMap[category] || category;
        return `${this.baseUrl}/${width}x${height}?${query}`;
    }

    // 生成丰富的照片数据
    generatePhotoData(count = 50) {
        const categories = ['nature', 'city', 'portrait', 'food'];
        const titles = {
            nature: [
                '壮丽山景', '森林秘境', '海岸风光', '田园风情', '星空银河', 
                '日出日落', '瀑布奇观', '雪山美景', '花海盛开', '湖光山色'
            ],
            city: [
                '都市夜景', '现代建筑', '街头艺术', '城市天际线', '繁华街道',
                '地标建筑', '城市风光', '建筑几何', '都市生活', '城市灯火'
            ],
            portrait: [
                '优雅肖像', '时尚写真', '人物特写', '生活瞬间', '表情捕捉',
                '黑白肖像', '自然光线', '人像艺术', '情感表达', '个性展现'
            ],
            food: [
                '精致美食', '烘焙艺术', '咖啡时光', '甜品诱惑', '料理艺术',
                '新鲜食材', '美食摄影', '餐桌美学', '色彩搭配', '营养搭配'
            ]
        };

        const descriptions = {
            nature: [
                '大自然的鬼斧神工，令人叹为观止',
                '静谧的自然风光，洗涤心灵的净土',
                '壮丽的自然景观，展现地球之美',
                '纯净的自然环境，远离城市喧嚣'
            ],
            city: [
                '现代城市的璀璨灯火，展现都市魅力',
                '建筑与艺术的完美结合',
                '繁华都市中的独特风景',
                '城市建筑的几何美学'
            ],
            portrait: [
                '捕捉人物最真实的情感瞬间',
                '展现个性与魅力的人像艺术',
                '光影与人物的完美结合',
                '记录生活中的美好时刻'
            ],
            food: [
                '色香味俱全的精致料理',
                '烹饪艺术的完美呈现',
                '美食与生活的美好结合',
                '视觉与味觉的双重享受'
            ]
        };

        const photoData = [];
        
        for (let i = 1; i <= count; i++) {
            const category = categories[Math.floor(Math.random() * categories.length)];
            const titleArray = titles[category];
            const descArray = descriptions[category];
            
            const title = titleArray[Math.floor(Math.random() * titleArray.length)];
            const description = descArray[Math.floor(Math.random() * descArray.length)];
            
            // 生成随机日期（过去一年内）
            const randomDate = new Date();
            randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 365));
            
            // 为每个图片生成唯一的种子，确保图片固定
            const seed = `photo-${i}-${category}`;
            
            photoData.push({
                id: i,
                title: title,
                description: description,
                category: category,
                date: randomDate.toISOString().split('T')[0],
                image: `${this.baseUrl}/800x600?${category}&sig=${seed}`,
                thumbnail: `${this.baseUrl}/400x300?${category}&sig=${seed}`
            });
        }
        
        return photoData;
    }

    // 获取特定主题的图片集合
    getThemeCollection(theme, count = 20) {
        const themes = {
            minimalist: 'minimalist,clean,simple,white',
            vintage: 'vintage,retro,old,classic',
            colorful: 'colorful,bright,vibrant,rainbow',
            blackwhite: 'black,white,monochrome,bw',
            abstract: 'abstract,pattern,texture,geometric',
            travel: 'travel,destination,vacation,adventure',
            technology: 'technology,computer,digital,modern',
            fashion: 'fashion,style,clothing,model'
        };

        const query = themes[theme] || theme;
        const photos = [];

        for (let i = 1; i <= count; i++) {
            photos.push({
                id: `${theme}-${i}`,
                image: `${this.baseUrl}/800x600?${query}&sig=${theme}-${i}`,
                thumbnail: `${this.baseUrl}/400x300?${query}&sig=${theme}-${i}`
            });
        }

        return photos;
    }
}

// 使用示例和说明
const unsplashExamples = {
    // 基础用法
    basic: () => {
        const api = new UnsplashAPI();
        return api.generatePhotoData(30); // 生成30张图片
    },

    // 获取特定分类图片
    category: (category) => {
        const api = new UnsplashAPI();
        return api.getCategoryImage(category, 1200, 800);
    },

    // 获取主题集合
    theme: (themeName) => {
        const api = new UnsplashAPI();
        return api.getThemeCollection(themeName, 15);
    }
};

// 导出
window.UnsplashAPI = UnsplashAPI;
window.unsplashExamples = unsplashExamples;
