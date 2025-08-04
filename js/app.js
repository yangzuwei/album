// Photo data - Replace with your own images
const photoData = [
    {
        id: 1,
        title: "日出时分",
        description: "清晨的第一缕阳光穿过云层，洒向大地",
        category: "nature",
        date: "2024-01-15",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "现代都市",
        description: "繁华的城市夜景，灯火辉煌",
        category: "city",
        date: "2024-01-20",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "肖像写真",
        description: "自然光下的人像摄影",
        category: "portrait",
        date: "2024-01-25",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        title: "美食诱惑",
        description: "精致的料理艺术",
        category: "food",
        date: "2024-02-01",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80",
        thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        title: "森林深处",
        description: "幽静的森林小径",
        category: "nature",
        date: "2024-02-05",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        title: "建筑美学",
        description: "现代建筑的几何美感",
        category: "city",
        date: "2024-02-10",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 7,
        title: "优雅女士",
        description: "黑白摄影的经典魅力",
        category: "portrait",
        date: "2024-02-15",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        thumbnail: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 8,
        title: "精致甜品",
        description: "色彩缤纷的马卡龙",
        category: "food",
        date: "2024-02-20",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 9,
        title: "山峦叠嶂",
        description: "壮丽的山脉风光",
        category: "nature",
        date: "2024-02-25",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 10,
        title: "街头艺术",
        description: "城市街头的创意涂鸦",
        category: "city",
        date: "2024-03-01",
        image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        thumbnail: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 11,
        title: "少年时光",
        description: "青春活力的瞬间",
        category: "portrait",
        date: "2024-03-05",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 12,
        title: "咖啡时光",
        description: "温暖的咖啡香气",
        category: "food",
        date: "2024-03-10",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 13,
        title: "星空银河",
        description: "璀璨的星空，银河横跨天际",
        category: "nature",
        date: "2024-03-15",
        image: "https://images.unsplash.com/photo-1464822759844-d150baec43a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1464822759844-d150baec43a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 14,
        title: "都市天际线",
        description: "摩天大楼构成的现代都市轮廓",
        category: "city",
        date: "2024-03-20",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 15,
        title: "时尚肖像",
        description: "充满个性的时尚人像",
        category: "portrait",
        date: "2024-03-25",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 16,
        title: "精致甜点",
        description: "色彩斑斓的马卡龙",
        category: "food",
        date: "2024-04-01",
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 17,
        title: "山川壮丽",
        description: "雄伟的山脉与云海",
        category: "nature",
        date: "2024-04-05",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 18,
        title: "未来建筑",
        description: "充满科技感的现代建筑",
        category: "city",
        date: "2024-04-10",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        thumbnail: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 19,
        title: "复古人像",
        description: "充满怀旧感的人像摄影",
        category: "portrait",
        date: "2024-04-15",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
        thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 20,
        title: "美味佳肴",
        description: "精心制作的日式料理",
        category: "food",
        date: "2024-04-20",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2125&q=80",
        thumbnail: "https://images.unsplash.com/photo-1553909489-cd47e0ef937a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 21,
        title: "海洋波涛",
        description: "汹涌澎湃的海浪",
        category: "nature",
        date: "2024-04-25",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 22,
        title: "繁华街道",
        description: "人来人往的繁华都市街景",
        category: "city",
        date: "2024-04-30",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80",
        thumbnail: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 23,
        title: "优雅女性",
        description: "展现女性优雅气质的人像",
        category: "portrait",
        date: "2024-05-05",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        thumbnail: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 24,
        title: "烘焙艺术",
        description: "新鲜出炉的面包香气",
        category: "food",
        date: "2024-05-10",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
];

// Application state
let currentFilter = 'all';
let currentViewMode = 'grid';
let currentPhotos = [...photoData];
let currentLightboxIndex = 0;
let isLightboxOpen = false;
let isDarkMode = false;

// Enhanced instances
let imagePreloader = null;
let scrollAnimations = null;

// DOM elements
const gallery = document.getElementById('gallery');
const navBtns = document.querySelectorAll('.nav-btn');
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const viewToggle = document.getElementById('viewToggle');
const themeToggle = document.getElementById('themeToggle');
const photoCount = document.getElementById('photoCount');
const loadedCount = document.getElementById('loadedCount');
const viewMode = document.getElementById('viewMode');
const loadingScreen = document.getElementById('loadingScreen');
const loadingProgressBar = document.getElementById('loadingProgressBar');

// Lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxDate = document.getElementById('lightboxDate');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxThumbnails = document.getElementById('lightboxThumbnails');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Initialize enhanced components
    imagePreloader = new ImagePreloader();
    scrollAnimations = new ScrollAnimations();
    
    // Load theme preference
    loadThemePreference();
    
    // Preload images with progress
    const imageUrls = photoData.map(photo => photo.image);
    
    imagePreloader.preload(
        imageUrls,
        (loaded, total) => {
            const progress = (loaded / total) * 100;
            loadingProgressBar.style.width = `${progress}%`;
        },
        () => {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                renderPhotos();
                setupEventListeners();
                setupEnhancedFeatures();
                updatePhotoCount();
                updateViewModeText();
            }, 500);
        }
    );
}

function setupEventListeners() {
    // Navigation buttons
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            setActiveFilter(category);
            filterPhotos(category);
        });
    });

    // Search functionality
    searchToggle.addEventListener('click', toggleSearch);
    searchInput.addEventListener('input', PhotoGalleryUtils.debounce(handleSearch, 300));
    searchClear.addEventListener('click', clearSearch);

    // View toggle
    viewToggle.addEventListener('click', toggleView);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Lightbox events
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));

    // Keyboard events
    document.addEventListener('keydown', handleKeyboard);

    // Enhanced scroll events
    window.addEventListener('scroll', PhotoGalleryUtils.throttle(handleScroll, 16));
}

function renderPhotos() {
    gallery.innerHTML = '';
    
    currentPhotos.forEach((photo, index) => {
        const photoCard = createPhotoCard(photo, index);
        gallery.appendChild(photoCard);
    });

    // Add scroll reveal animation
    setTimeout(() => {
        const cards = gallery.querySelectorAll('.photo-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('scroll-reveal', 'revealed');
            }, index * 100);
        });
    }, 100);
}

function createPhotoCard(photo, index) {
    const card = document.createElement('div');
    card.className = 'photo-card reveal-on-scroll';
    card.setAttribute('data-delay', index * 50);

    // 增强的点击事件
    card.onclick = (e) => {
        openLightbox(index);
        
        // 播放点击音效
        if (window.advancedEffects) {
            window.advancedEffects.playSound('open');
        }
        
        // 触发点击爆炸效果
        if (window.advancedEffects) {
            window.advancedEffects.createExplosion(e.clientX, e.clientY);
        }
    };

    // 添加悬停音效
    card.addEventListener('mouseenter', () => {
        if (window.advancedEffects) {
            window.advancedEffects.playSound('hover');
        }
    });

    // 添加爆炸点击效果
    if (window.advancedEffects) {
        window.advancedEffects.addClickExplosion(card);
    }

    const randomHeight = currentViewMode === 'masonry' ? 
        `${Math.floor(Math.random() * 150) + 200}px` : '250px';

    card.innerHTML = `
        <div class="photo-image-container">
            <img class="photo-image loading" 
                 src="${photo.thumbnail}" 
                 alt="${photo.title}"
                 data-src="${photo.image}"
                 style="${currentViewMode === 'masonry' ? 'height: auto;' : `height: ${randomHeight};`}"
                 onload="this.classList.remove('loading')"
                 onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">
            <button class="photo-share-btn tooltip" data-tooltip="分享图片" onclick="sharePhoto(${index}, event)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
            </button>
            <div class="photo-tags">
                <span class="photo-tag">${getCategoryName(photo.category)}</span>
                <span class="photo-tag">${formatDate(photo.date)}</span>
            </div>
            <div class="photo-overlay">
                <div class="photo-overlay-content">
                    <h3>${photo.title}</h3>
                    <p>${photo.description}</p>
                    <div class="photo-meta">
                        <span>${formatDate(photo.date)}</span>
                        <span class="photo-category">${getCategoryName(photo.category)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="photo-info">
            <h3>${photo.title}</h3>
            <p>${photo.description}</p>
            <div class="photo-meta">
                <span>${formatDate(photo.date)}</span>
                <span class="photo-category">${getCategoryName(photo.category)}</span>
            </div>
        </div>
    `;

    // Add to scroll animations
    scrollAnimations.observe(card);
    
    return card;
}

function setActiveFilter(category) {
    navBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    currentFilter = category;
}

function filterPhotos(category) {
    if (category === 'all') {
        currentPhotos = [...photoData];
    } else {
        currentPhotos = photoData.filter(photo => photo.category === category);
    }
    
    // Add fade out animation
    gallery.style.opacity = '0.5';
    gallery.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        renderPhotos();
        updatePhotoCount();
        gallery.style.opacity = '1';
        gallery.style.transform = 'translateY(0)';
    }, 300);
}

function toggleSearch() {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        handleSearch();
    }
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    // 触发搜索事件用于成就系统
    if (query !== '') {
        document.dispatchEvent(new CustomEvent('searchPerformed'));
    }
    
    if (query === '') {
        filterPhotos(currentFilter);
        return;
    }

    currentPhotos = photoData.filter(photo => {
        const matchesCategory = currentFilter === 'all' || photo.category === currentFilter;
        const matchesQuery = 
            photo.title.toLowerCase().includes(query) ||
            photo.description.toLowerCase().includes(query) ||
            getCategoryName(photo.category).toLowerCase().includes(query);
        
        return matchesCategory && matchesQuery;
    });

    renderPhotos();
    updatePhotoCount();
    
    // Show clear button if there's text
    searchClear.style.display = query ? 'block' : 'none';
}

function clearSearch() {
    searchInput.value = '';
    searchClear.style.display = 'none';
    handleSearch();
}

function toggleView() {
    currentViewMode = currentViewMode === 'grid' ? 'masonry' : 'grid';
    gallery.className = `gallery ${currentViewMode === 'masonry' ? 'masonry' : ''}`;
    
    // Update view toggle icon
    const icon = viewToggle.querySelector('svg');
    if (currentViewMode === 'masonry') {
        icon.innerHTML = `
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M9 9h6v6h-6z"/>
        `;
    } else {
        icon.innerHTML = `
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
        `;
    }
    
    renderPhotos();
}

function openLightbox(index) {
    currentLightboxIndex = index;
    isLightboxOpen = true;
    
    const photo = currentPhotos[index];
    lightboxImage.src = photo.image;
    lightboxTitle.textContent = photo.title;
    lightboxDescription.textContent = photo.description;
    lightboxDate.textContent = formatDate(photo.date);
    lightboxCategory.textContent = getCategoryName(photo.category);
    
    // Create thumbnails
    createLightboxThumbnails();
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Preload adjacent images
    preloadAdjacentImages(index);
    
    // 预加载相邻图片（高级特效版本）
    if (window.imageShowcaseEffects) {
        window.imageShowcaseEffects.preloadAdjacentImages(index, currentPhotos);
    }
    
    // 触发图片变更事件
    document.dispatchEvent(new CustomEvent('lightboxImageChanged'));
}

function closeLightbox() {
    lightbox.classList.remove('active');
    isLightboxOpen = false;
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    const newIndex = currentLightboxIndex + direction;
    
    if (newIndex >= 0 && newIndex < currentPhotos.length) {
        currentLightboxIndex = newIndex;
        const photo = currentPhotos[newIndex];
        
        // Add transition effect
        lightboxImage.style.opacity = '0.5';
        lightboxImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            lightboxImage.src = photo.image;
            lightboxTitle.textContent = photo.title;
            lightboxDescription.textContent = photo.description;
            lightboxDate.textContent = formatDate(photo.date);
            lightboxCategory.textContent = getCategoryName(photo.category);
            
            // 触发图片变更事件
            document.dispatchEvent(new CustomEvent('lightboxImageChanged'));
            
            // 预加载相邻图片
            if (window.imageShowcaseEffects) {
                window.imageShowcaseEffects.preloadAdjacentImages(newIndex, currentPhotos);
            }
            
            lightboxImage.style.opacity = '1';
            lightboxImage.style.transform = 'scale(1)';
            
            updateLightboxThumbnails();
            preloadAdjacentImages(newIndex);
        }, 150);
    }
}

function createLightboxThumbnails() {
    lightboxThumbnails.innerHTML = '';
    
    currentPhotos.forEach((photo, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.className = 'lightbox-thumbnail';
        thumbnail.src = photo.thumbnail;
        thumbnail.alt = photo.title;
        thumbnail.onclick = () => {
            currentLightboxIndex = index;
            navigateLightbox(0);
        };
        
        if (index === currentLightboxIndex) {
            thumbnail.classList.add('active');
        }
        
        lightboxThumbnails.appendChild(thumbnail);
    });
}

function updateLightboxThumbnails() {
    const thumbnails = lightboxThumbnails.querySelectorAll('.lightbox-thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentLightboxIndex);
    });
}

function preloadAdjacentImages(index) {
    const preloadIndexes = [index - 1, index + 1];
    
    preloadIndexes.forEach(i => {
        if (i >= 0 && i < currentPhotos.length) {
            const img = new Image();
            img.src = currentPhotos[i].image;
        }
    });
}

function handleKeyboard(e) {
    if (!isLightboxOpen) return;
    
    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            navigateLightbox(-1);
            break;
        case 'ArrowRight':
            navigateLightbox(1);
            break;
    }
}

function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements as they're added
    const observeElements = () => {
        document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
            observer.observe(el);
        });
    };

    // Initial observation
    setTimeout(observeElements, 100);
    
    // Re-observe after gallery updates
    const galleryObserver = new MutationObserver(observeElements);
    galleryObserver.observe(gallery, { childList: true });
}

function setupScrollAnimations() {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

function updatePhotoCount() {
    photoCount.textContent = currentPhotos.length;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getCategoryName(category) {
    const categoryMap = {
        nature: '自然',
        city: '城市',
        portrait: '人像',
        food: '美食'
    };
    return categoryMap[category] || category;
}

// Lazy loading for images
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
    if (!isLightboxOpen) return;
    
    const minSwipeDistance = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
            navigateLightbox(-1); // Swipe right - previous image
        } else {
            navigateLightbox(1);  // Swipe left - next image
        }
    }
}

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

// Enhanced feature functions
function setupEnhancedFeatures() {
    // Setup magnetic buttons
    setupMagneticButtons();
    
    // Setup advanced interactions
    setupAdvancedInteractions();
}

function setupMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.magnetic-btn');
    
    magneticButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function(e) {
            this.style.transition = 'none';
        });
        
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        btn.addEventListener('mouseleave', function(e) {
            this.style.transition = 'var(--transition)';
            this.style.transform = 'translate(0, 0)';
        });
    });
}

function setupAdvancedInteractions() {
    // Enhanced photo card interactions
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.add('theme-transition');
    
    // 触发主题变更事件用于成就系统
    document.dispatchEvent(new CustomEvent('themeChanged'));
    
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
        `;
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
        `;
    }
    
    // Save theme preference
    localStorage.setItem('photoGalleryTheme', isDarkMode ? 'dark' : 'light');
    
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 300);
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('photoGalleryTheme');
    if (savedTheme === 'dark') {
        isDarkMode = false; // Will be toggled to true
        toggleTheme();
    }
}

function handleScroll() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 100) {
        header.classList.add('glass-effect');
    } else {
        header.classList.remove('glass-effect');
    }
}

function sharePhoto(index, event) {
    event.stopPropagation();
    const photo = currentPhotos[index];
    
    if (navigator.share) {
        navigator.share({
            title: photo.title,
            text: photo.description,
            url: photo.image
        });
    } else {
        // Fallback to clipboard
        PhotoGalleryUtils.copyToClipboard(photo.image)
            .then(() => {
                showNotification('图片链接已复制到剪贴板！');
            })
            .catch(() => {
                showNotification('分享失败，请手动复制链接');
            });
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: var(--transition);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function updateViewModeText() {
    viewMode.textContent = currentViewMode === 'grid' ? '网格' : '瀑布流';
}

function updatePhotoCount() {
    photoCount.textContent = currentPhotos.length;
    loadedCount.textContent = currentPhotos.length;
}

// Export enhanced functions for potential external use
window.PhotoGallery = {
    ...window.PhotoGallery,
    toggleTheme,
    sharePhoto,
    showNotification,
    currentViewMode: () => currentViewMode,
    isDarkMode: () => isDarkMode
};
