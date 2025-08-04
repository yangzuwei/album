// 高级视觉特效和交互系统
class AdvancedEffects {
    constructor() {
        this.initializeEffects();
        this.setupAdvancedAnimations();
        this.createStarfield();
    }

    initializeEffects() {
        // 添加全局效果容器
        this.effectsContainer = document.createElement('div');
        this.effectsContainer.className = 'effects-container';
        document.body.appendChild(this.effectsContainer);

        // 创建视差背景
        this.createParallaxBackground();
        
        // 设置3D效果
        this.setup3DEffects();
        
        // 初始化音效
        this.initializeAudioEffects();
    }

    createParallaxBackground() {
        const parallaxBg = document.createElement('div');
        parallaxBg.className = 'parallax-bg';
        document.body.appendChild(parallaxBg);

        // 视差滚动效果
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            parallaxBg.style.transform = `translateY(${rate}px)`;
        });
    }

    createStarfield() {
        const starfield = document.createElement('div');
        starfield.className = 'starfield';
        document.body.appendChild(starfield);
    }

    setup3DEffects() {
        // 为照片卡片添加3D效果
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('photo-card-3d', 'advanced-shadow');
                    this.addMouseTrackingEffect(entry.target);
                }
            });
        });

        // 观察所有照片卡片
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                const photoCards = document.querySelectorAll('.photo-card');
                photoCards.forEach(card => observer.observe(card));
            }, 1000);
        });
    }

    addMouseTrackingEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale3d(1.05, 1.05, 1.05)
            `;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    }

    initializeAudioEffects() {
        // 创建音效上下文（需要用户交互后才能播放）
        this.audioContext = null;
        this.sounds = {};

        document.addEventListener('click', () => {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                this.createSounds();
            }
        }, { once: true });
    }

    createSounds() {
        // 创建点击音效
        this.sounds.click = this.createTone(800, 0.1, 'sine');
        this.sounds.hover = this.createTone(1000, 0.05, 'sine');
        this.sounds.open = this.createTone(600, 0.2, 'triangle');
    }

    createTone(frequency, duration, type = 'sine') {
        return () => {
            if (!this.audioContext) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = type;
            
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
        };
    }

    playSound(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }

    setupAdvancedAnimations() {
        // 滚动触发动画
        this.setupScrollAnimations();
        
        // 鼠标跟踪效果
        this.setupMouseEffects();
    }

    setupScrollAnimations() {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    this.addEntranceEffect(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

    addEntranceEffect(element) {
        const effects = ['slideInUp', 'fadeInScale', 'rotateIn', 'bounceIn'];
        const randomEffect = effects[Math.floor(Math.random() * effects.length)];
        
        element.style.animation = `${randomEffect} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
    }

    setupMouseEffects() {
        // 鼠标跟踪光标效果
        this.createCustomCursor();
    }

    createCustomCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: all 0.1s ease;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // 悬停效果
        document.addEventListener('mouseenter', (e) => {
            if (e.target.matches('button, a, .photo-card')) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%)';
            }
        }, true);

        document.addEventListener('mouseleave', (e) => {
            if (e.target.matches('button, a, .photo-card')) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, transparent 70%)';
            }
        }, true);
    }

    // 按钮点击爆炸效果
    addClickExplosion(element) {
        element.addEventListener('click', (e) => {
            this.createExplosion(e.clientX, e.clientY);
            this.playSound('click');
        });
    }

    createExplosion(x, y) {
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'explosion-particle';
            
            const angle = (i / 12) * Math.PI * 2;
            const velocity = Math.random() * 100 + 50;
            const size = Math.random() * 4 + 2;
            
            particle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: var(--primary-color);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${x}px;
                top: ${y}px;
            `;
            
            document.body.appendChild(particle);
            
            // 动画粒子
            const deltaX = Math.cos(angle) * velocity;
            const deltaY = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${deltaX}px, ${deltaY}px) scale(0)`, opacity: 0 }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            };
        }
    }

    // 图片懒加载增强
    enhanceImageLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImageWithEffect(img);
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    loadImageWithEffect(img) {
        // 创建模糊占位符
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        placeholder.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
            background-size: 20px 20px;
            animation: shimmer 1.5s infinite;
        `;
        
        img.parentNode.insertBefore(placeholder, img);
        
        const newImg = new Image();
        newImg.onload = () => {
            img.src = newImg.src;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            img.onload = () => {
                img.style.opacity = '1';
                placeholder.style.opacity = '0';
                setTimeout(() => {
                    if (placeholder.parentNode) {
                        placeholder.parentNode.removeChild(placeholder);
                    }
                }, 500);
            };
        };
        
        newImg.src = img.dataset.src;
    }
}

// CSS动画关键帧（通过JavaScript添加）
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideInUp {
        from { opacity: 0; transform: translateY(50px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInScale {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes rotateIn {
        from { opacity: 0; transform: rotate(-180deg) scale(0.5); }
        to { opacity: 1; transform: rotate(0deg) scale(1); }
    }
    
    @keyframes bounceIn {
        0% { opacity: 0; transform: scale(0.3); }
        50% { opacity: 1; transform: scale(1.1); }
        100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes shimmer {
        0% { background-position: -200px 0; }
        100% { background-position: 200px 0; }
    }
    
    .custom-cursor {
        mix-blend-mode: difference;
    }
    
    @media (pointer: coarse) {
        .custom-cursor {
            display: none;
        }
    }
`;
document.head.appendChild(styleSheet);

// 初始化高级效果
document.addEventListener('DOMContentLoaded', () => {
    window.advancedEffects = new AdvancedEffects();
});

// 导出类供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdvancedEffects;
}
