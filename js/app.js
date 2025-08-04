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
    }
];

// Application state
let currentFilter = 'all';
let currentViewMode = 'grid';
let currentPhotos = [...photoData];
let currentLightboxIndex = 0;
let isLightboxOpen = false;

// DOM elements
const gallery = document.getElementById('gallery');
const navBtns = document.querySelectorAll('.nav-btn');
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const viewToggle = document.getElementById('viewToggle');
const photoCount = document.getElementById('photoCount');
const loadingScreen = document.getElementById('loadingScreen');

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
    // Show loading screen initially
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        renderPhotos();
        setupEventListeners();
        setupScrollAnimations();
        updatePhotoCount();
    }, 1500);
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
    searchInput.addEventListener('input', handleSearch);
    searchClear.addEventListener('click', clearSearch);

    // View toggle
    viewToggle.addEventListener('click', toggleView);

    // Lightbox events
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));

    // Keyboard events
    document.addEventListener('keydown', handleKeyboard);

    // Intersection Observer for scroll animations
    setupIntersectionObserver();
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
    card.className = 'photo-card scroll-reveal';
    card.onclick = () => openLightbox(index);

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

// Export functions for potential external use
window.PhotoGallery = {
    addPhoto: (photo) => {
        photoData.push({ ...photo, id: Date.now() });
        if (currentFilter === 'all' || currentFilter === photo.category) {
            filterPhotos(currentFilter);
        }
    },
    removePhoto: (id) => {
        const index = photoData.findIndex(photo => photo.id === id);
        if (index > -1) {
            photoData.splice(index, 1);
            filterPhotos(currentFilter);
        }
    },
    getPhotos: () => [...photoData],
    setFilter: filterPhotos,
    openPhoto: openLightbox
};
