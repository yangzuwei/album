// 粒子背景效果
class ParticleBackground {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.animationId = null;
        this.init();
    }

    init() {
        this.createCanvas();
        this.createParticles();
        this.animate();
        this.setupEventListeners();
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'particle-canvas';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.1;
        `;
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.resize();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
        this.particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.3
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // 更新位置
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // 边界检测
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // 绘制粒子
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
        });
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// 图片预加载器
class ImagePreloader {
    constructor() {
        this.loaded = 0;
        this.total = 0;
        this.cache = new Map();
    }

    preload(urls, onProgress = () => {}, onComplete = () => {}) {
        this.total = urls.length;
        this.loaded = 0;

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
        this.setupParallaxElements();
        this.setupRevealAnimations();
    }

    createIntersectionObserver() {
        const options = {
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '-10% 0px -10% 0px'
        };

        this.observers.set('reveal', new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // 添加延迟动画效果
                    const delay = entry.target.dataset.delay || 0;
                    entry.target.style.animationDelay = `${delay}ms`;
                }
            });
        }, options));
    }

    setupParallaxElements() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                const yPos = Math.round(rate);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        };

        if (parallaxElements.length > 0) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
    }

    setupRevealAnimations() {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        revealElements.forEach(el => {
            this.observers.get('reveal').observe(el);
        });
    }

    observe(element, type = 'reveal') {
        if (this.observers.has(type)) {
            this.observers.get(type).observe(element);
        }
    }
}

// 高级工具类
class PhotoGalleryUtils {
    static debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
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

    static lerp(start, end, factor) {
        return start + (end - start) * factor;
    }

    static getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    static copyToClipboard(text) {
        return navigator.clipboard.writeText(text).catch(() => {
            // 降级方案
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
            document.body.removeChild(textArea);
        });
    }

    static downloadImage(url, filename) {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// 导出到全局
window.ImagePreloader = ImagePreloader;
window.ScrollAnimations = ScrollAnimations;
window.PhotoGalleryUtils = PhotoGalleryUtils;
