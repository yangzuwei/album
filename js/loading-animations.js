// 高级加载动画和页面转场效果
class LoadingAnimations {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.progressBar = document.getElementById('loadingProgressBar');
        this.currentProgress = 0;
        this.targetProgress = 0;
        
        this.initializeEnhancedLoading();
        this.createPageTransitions();
        this.setupPreloader();
    }

    initializeEnhancedLoading() {
        // 增强加载屏幕
        this.enhanceLoadingScreen();
        
        // 模拟真实加载进度
        this.simulateLoading();
        
        // 添加加载完成动画
        this.setupLoadingComplete();
    }

    enhanceLoadingScreen() {
        if (!this.loadingScreen) return;

        // 添加动态背景
        const dynamicBg = document.createElement('div');
        dynamicBg.className = 'loading-dynamic-bg';
        dynamicBg.innerHTML = `
            <div class="loading-wave"></div>
            <div class="loading-wave"></div>
            <div class="loading-wave"></div>
        `;
        this.loadingScreen.appendChild(dynamicBg);

        // 添加logo动画
        const logo = this.loadingScreen.querySelector('.loading-logo');
        if (logo) {
            logo.innerHTML = `
                <div class="logo-ring">
                    <div class="logo-inner">📸</div>
                </div>
            `;
        }

        // 添加加载提示文字动画
        const loadingTexts = [
            '正在初始化相册...',
            '加载精美照片中...',
            '准备视觉盛宴...',
            '优化用户体验...',
            '即将完成...'
        ];

        const textElement = this.loadingScreen.querySelector('.loading-text');
        if (textElement) {
            this.animateLoadingText(textElement, loadingTexts);
        }

        // 添加粒子效果
        this.createLoadingParticles();
    }

    animateLoadingText(element, texts) {
        let currentIndex = 0;
        
        const changeText = () => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.textContent = texts[currentIndex];
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                currentIndex = (currentIndex + 1) % texts.length;
            }, 300);
        };

        // 立即设置第一个文本
        element.textContent = texts[0];
        
        // 每2秒换一个文本
        this.textInterval = setInterval(changeText, 2000);
    }

    createLoadingParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'loading-particles';
        this.loadingScreen.appendChild(particleContainer);

        // 创建多个粒子
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createLoadingParticle(particleContainer);
            }, i * 100);
        }
    }

    createLoadingParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'loading-particle';
        
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * window.innerWidth;
        const endX = startX + (Math.random() - 0.5) * 200;
        const duration = Math.random() * 3000 + 2000;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(99, 102, 241, 0.8);
            border-radius: 50%;
            left: ${startX}px;
            bottom: -10px;
            pointer-events: none;
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        `;
        
        container.appendChild(particle);
        
        // 动画粒子上升
        particle.animate([
            { 
                transform: `translateY(0) translateX(0) scale(1)`,
                opacity: 0.8
            },
            { 
                transform: `translateY(-${window.innerHeight + 50}px) translateX(${endX - startX}px) scale(0.5)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
            
            // 递归创建新粒子
            if (this.loadingScreen && this.loadingScreen.style.display !== 'none') {
                setTimeout(() => {
                    this.createLoadingParticle(container);
                }, Math.random() * 1000);
            }
        };
    }

    simulateLoading() {
        const steps = [
            { target: 20, delay: 500, text: '加载资源...' },
            { target: 45, delay: 800, text: '初始化组件...' },
            { target: 70, delay: 600, text: '准备界面...' },
            { target: 90, delay: 700, text: '最后优化...' },
            { target: 100, delay: 500, text: '完成!' }
        ];

        let currentStep = 0;
        
        const executeStep = () => {
            if (currentStep >= steps.length) {
                this.completeLoading();
                return;
            }

            const step = steps[currentStep];
            this.animateProgress(step.target);
            
            setTimeout(() => {
                currentStep++;
                executeStep();
            }, step.delay);
        };

        // 开始模拟加载
        setTimeout(executeStep, 1000);
    }

    animateProgress(target) {
        this.targetProgress = target;
        
        const animate = () => {
            const diff = this.targetProgress - this.currentProgress;
            if (Math.abs(diff) < 0.1) {
                this.currentProgress = this.targetProgress;
            } else {
                this.currentProgress += diff * 0.1;
            }
            
            if (this.progressBar) {
                this.progressBar.style.width = `${this.currentProgress}%`;
            }
            
            if (this.currentProgress < this.targetProgress) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    }

    completeLoading() {
        // 清理定时器
        if (this.textInterval) {
            clearInterval(this.textInterval);
        }

        // 添加完成动画
        setTimeout(() => {
            this.hideLoadingScreen();
        }, 800);
    }

    hideLoadingScreen() {
        if (!this.loadingScreen) return;

        // 创建爆炸效果
        this.createLoadingExplosion();

        // 隐藏加载屏幕
        this.loadingScreen.style.animation = 'loadingFadeOut 1s ease-in-out forwards';
        
        setTimeout(() => {
            this.loadingScreen.style.display = 'none';
            
            // 触发页面入场动画
            this.triggerPageEntranceAnimation();
        }, 1000);
    }

    createLoadingExplosion() {
        const center = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };

        // 创建爆炸粒子
        for (let i = 0; i < 30; i++) {
            this.createExplosionParticle(center.x, center.y);
        }
    }

    createExplosionParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 300 + 100;
        const size = Math.random() * 6 + 3;
        
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: #ffd700;
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 10000;
            box-shadow: 0 0 10px #ffd700;
        `;
        
        document.body.appendChild(particle);
        
        const deltaX = Math.cos(angle) * velocity;
        const deltaY = Math.sin(angle) * velocity;
        
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${deltaX - 50}px, ${deltaY - 50}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        };
    }

    triggerPageEntranceAnimation() {
        // 页面元素逐个出现
        const elements = [
            '.header',
            '.gallery-stats', 
            '.gallery'
        ];

        elements.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                setTimeout(() => {
                    element.classList.add('page-entrance');
                }, index * 200);
            }
        });
    }

    setupLoadingComplete() {
        // 监听所有资源加载完成
        window.addEventListener('load', () => {
            this.allResourcesLoaded = true;
        });

        // 检查关键元素是否加载完成
        this.checkCriticalElements();
    }

    checkCriticalElements() {
        const criticalElements = [
            '#gallery',
            '.header',
            '.footer'
        ];

        const checkInterval = setInterval(() => {
            const allElementsReady = criticalElements.every(selector => 
                document.querySelector(selector) !== null
            );

            if (allElementsReady) {
                clearInterval(checkInterval);
                this.criticalElementsReady = true;
            }
        }, 100);
    }

    createPageTransitions() {
        // 创建页面转场效果
        this.setupRouteTransitions();
        this.setupModalTransitions();
    }

    setupRouteTransitions() {
        // 模拟路由转场效果（为SPA做准备）
        document.addEventListener('pageTransition', (e) => {
            this.performPageTransition(e.detail.type);
        });
    }

    performPageTransition(type = 'slide') {
        const overlay = document.createElement('div');
        overlay.className = `page-transition-overlay ${type}`;
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.classList.add('active');
        }, 50);
        
        setTimeout(() => {
            overlay.classList.remove('active');
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 500);
        }, 1000);
    }

    setupModalTransitions() {
        // 模态框转场效果
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && 
                        (node.classList?.contains('lightbox') || 
                         node.classList?.contains('modal'))) {
                        this.animateModalEntrance(node);
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    animateModalEntrance(modal) {
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            modal.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            modal.style.opacity = '1';
            modal.style.transform = 'scale(1)';
        }, 50);
    }

    setupPreloader() {
        // 图片预加载器
        this.imagePreloader = new Map();
        this.preloadQueue = [];
        this.maxConcurrentLoads = 3;
        this.currentLoads = 0;
    }

    preloadImage(src, priority = 'normal') {
        return new Promise((resolve, reject) => {
            if (this.imagePreloader.has(src)) {
                resolve(this.imagePreloader.get(src));
                return;
            }

            const request = { src, priority, resolve, reject };
            
            if (priority === 'high') {
                this.preloadQueue.unshift(request);
            } else {
                this.preloadQueue.push(request);
            }
            
            this.processPreloadQueue();
        });
    }

    processPreloadQueue() {
        while (this.currentLoads < this.maxConcurrentLoads && this.preloadQueue.length > 0) {
            const request = this.preloadQueue.shift();
            this.loadImage(request);
        }
    }

    loadImage(request) {
        this.currentLoads++;
        
        const img = new Image();
        img.onload = () => {
            this.imagePreloader.set(request.src, img);
            request.resolve(img);
            this.currentLoads--;
            this.processPreloadQueue();
        };
        
        img.onerror = () => {
            request.reject(new Error(`Failed to load image: ${request.src}`));
            this.currentLoads--;
            this.processPreloadQueue();
        };
        
        img.src = request.src;
    }

    // 创建自定义加载指示器
    createCustomLoader(container, options = {}) {
        const loader = document.createElement('div');
        loader.className = 'custom-loader';
        
        const type = options.type || 'spinner';
        const size = options.size || 'medium';
        const color = options.color || 'var(--primary-color)';
        
        switch(type) {
            case 'dots':
                loader.innerHTML = `
                    <div class="loader-dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                `;
                break;
            case 'wave':
                loader.innerHTML = `
                    <div class="loader-wave">
                        <div class="wave-bar"></div>
                        <div class="wave-bar"></div>
                        <div class="wave-bar"></div>
                        <div class="wave-bar"></div>
                        <div class="wave-bar"></div>
                    </div>
                `;
                break;
            default:
                loader.innerHTML = `<div class="loader-spinner"></div>`;
        }
        
        loader.style.setProperty('--loader-color', color);
        loader.classList.add(`loader-${size}`);
        
        container.appendChild(loader);
        return loader;
    }

    removeLoader(loader) {
        if (loader && loader.parentNode) {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 300);
        }
    }
}

// CSS样式
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    .loading-dynamic-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow: hidden;
    }

    .loading-wave {
        position: absolute;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, 
            rgba(99, 102, 241, 0.1) 0%, 
            rgba(6, 182, 212, 0.1) 50%, 
            rgba(168, 85, 247, 0.1) 100%);
        animation: waveMove 8s ease-in-out infinite;
        border-radius: 40%;
    }

    .loading-wave:nth-child(1) {
        top: -50%;
        left: -50%;
        animation-delay: 0s;
    }

    .loading-wave:nth-child(2) {
        top: -75%;
        left: -25%;
        animation-delay: -2s;
        animation-duration: 10s;
    }

    .loading-wave:nth-child(3) {
        top: -25%;
        left: -75%;
        animation-delay: -4s;
        animation-duration: 12s;
    }

    @keyframes waveMove {
        0%, 100% { transform: rotate(0deg) translate(-20px, -20px); }
        25% { transform: rotate(90deg) translate(20px, -20px); }
        50% { transform: rotate(180deg) translate(20px, 20px); }
        75% { transform: rotate(270deg) translate(-20px, 20px); }
    }

    .logo-ring {
        position: relative;
        width: 80px;
        height: 80px;
        border: 3px solid transparent;
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: logoSpin 2s linear infinite;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-inner {
        font-size: 2rem;
        animation: logoFloat 3s ease-in-out infinite;
    }

    @keyframes logoSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    @keyframes logoFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    .loading-particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        pointer-events: none;
    }

    .loading-text {
        transition: all 0.3s ease;
        z-index: 3;
        position: relative;
    }

    @keyframes loadingFadeOut {
        0% { 
            opacity: 1; 
            transform: scale(1);
        }
        50% { 
            opacity: 0.5; 
            transform: scale(1.1);
        }
        100% { 
            opacity: 0; 
            transform: scale(0.8);
        }
    }

    .page-entrance {
        animation: pageEntranceSlide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    @keyframes pageEntranceSlide {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .page-transition-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--background);
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    .page-transition-overlay.slide {
        transform: translateX(-100%);
        transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .page-transition-overlay.slide.active {
        transform: translateX(0);
    }

    .custom-loader {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s ease;
    }

    .loader-dots {
        display: flex;
        gap: 4px;
    }

    .loader-dots .dot {
        width: 8px;
        height: 8px;
        background: var(--loader-color, var(--primary-color));
        border-radius: 50%;
        animation: dotBounce 1.4s ease-in-out infinite both;
    }

    .loader-dots .dot:nth-child(1) { animation-delay: -0.32s; }
    .loader-dots .dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes dotBounce {
        0%, 80%, 100% { 
            transform: scale(0);
        } 
        40% { 
            transform: scale(1);
        }
    }

    .loader-wave {
        display: flex;
        gap: 2px;
        align-items: end;
    }

    .loader-wave .wave-bar {
        width: 3px;
        height: 20px;
        background: var(--loader-color, var(--primary-color));
        animation: waveBar 1.2s ease-in-out infinite;
    }

    .loader-wave .wave-bar:nth-child(1) { animation-delay: -1.1s; }
    .loader-wave .wave-bar:nth-child(2) { animation-delay: -1.0s; }
    .loader-wave .wave-bar:nth-child(3) { animation-delay: -0.9s; }
    .loader-wave .wave-bar:nth-child(4) { animation-delay: -0.8s; }
    .loader-wave .wave-bar:nth-child(5) { animation-delay: -0.7s; }

    @keyframes waveBar {
        0%, 40%, 100% { transform: scaleY(0.4); }
        20% { transform: scaleY(1.0); }
    }

    .loader-spinner {
        width: 20px;
        height: 20px;
        border: 2px solid transparent;
        border-top: 2px solid var(--loader-color, var(--primary-color));
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    .loader-small { transform: scale(0.7); }
    .loader-large { transform: scale(1.5); }
`;
document.head.appendChild(loadingStyles);

// 初始化加载动画系统
document.addEventListener('DOMContentLoaded', () => {
    window.loadingAnimations = new LoadingAnimations();
});

// 导出类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LoadingAnimations;
}
