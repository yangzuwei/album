// 图片预加载器
class ImagePreloader {
    constructor() {
        this.loaded = 0;
        this.total = 0;
        this.cache = new Map();
    }

    preload(urls, onProgress = () => {}, onComplete = () => {}) {
        this.loaded = 0;
        this.total = urls.length;

        if (this.total === 0) {
            onComplete();
            return;
        }

        urls.forEach(url => {
            if (this.cache.has(url)) {
                this.loaded++;
                onProgress(this.loaded, this.total);
                if (this.loaded === this.total) onComplete();
                return;
            }

            const img = new Image();
            img.onload = () => {
                this.cache.set(url, img);
                this.loaded++;
                onProgress(this.loaded, this.total);
                if (this.loaded === this.total) onComplete();
            };
            img.onerror = () => {
                this.loaded++;
                onProgress(this.loaded, this.total);
                if (this.loaded === this.total) onComplete();
            };
            img.src = url;
        });
    }

    get(url) {
        return this.cache.get(url);
    }
}

// 高级滚动动画
class ScrollAnimations {
    constructor() {
        this.observers = new Map();
        this.init();
    }

    init() {
        this.createIntersectionObserver();
    }

    createIntersectionObserver() {
        const options = {
            threshold: [0.1, 0.3, 0.6],
            rootMargin: '0px 0px -100px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target, entry.intersectionRatio);
                }
            });
        }, options);
    }

    animateElement(element, ratio) {
        const delay = element.dataset.delay || 0;
        
        setTimeout(() => {
            element.classList.add('revealed');
            
            // 添加基于滚动比例的动画效果
            if (ratio > 0.6) {
                element.classList.add('fully-visible');
            }
        }, delay);
    }

    observe(element) {
        if (this.observer) {
            this.observer.observe(element);
        }
    }

    unobserve(element) {
        if (this.observer) {
            this.observer.unobserve(element);
        }
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

// 实用工具类
class PhotoGalleryUtils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    static formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    static copyToClipboard(text) {
        return navigator.clipboard.writeText(text);
    }

    static generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    static smoothScrollTo(element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
    }

    static preloadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }

    static getImageDimensions(src) {
        return this.preloadImage(src).then(img => ({
            width: img.naturalWidth,
            height: img.naturalHeight,
            aspectRatio: img.naturalWidth / img.naturalHeight
        }));
    }

    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    static getRandomColor() {
        const colors = [
            '#6366f1', '#06b6d4', '#a855f7', '#ec4899',
            '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    static animateValue(obj, prop, start, end, duration) {
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = start + (end - start) * this.easeOutCubic(progress);
            
            obj[prop] = value;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    static easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    static createRipple(element, event) {
        const circle = document.createElement('span');
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = element.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        element.appendChild(circle);
    }
}

// 导出到全局
window.ImagePreloader = ImagePreloader;
window.ScrollAnimations = ScrollAnimations;
window.PhotoGalleryUtils = PhotoGalleryUtils;
