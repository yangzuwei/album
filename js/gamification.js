// 游戏化元素和成就系统
class GamificationSystem {
    constructor() {
        this.achievements = {
            explorer: { name: '探索者', description: '浏览超过10张照片', threshold: 10, unlocked: false, icon: '🗺️' },
            photographer: { name: '摄影师', description: '浏览超过50张照片', threshold: 50, unlocked: false, icon: '📸' },
            master: { name: '大师', description: '浏览超过100张照片', threshold: 100, unlocked: false, icon: '🏆' },
            timekeeper: { name: '时间守护者', description: '在网站停留超过5分钟', threshold: 300000, unlocked: false, icon: '⏰' },
            searcher: { name: '搜索者', description: '使用搜索功能10次', threshold: 10, unlocked: false, icon: '🔍' },
            filter_master: { name: '滤镜大师', description: '尝试所有滤镜效果', threshold: 8, unlocked: false, icon: '🎨' },
            night_owl: { name: '夜猫子', description: '使用深色模式', threshold: 1, unlocked: false, icon: '🌙' },
            speed_demon: { name: '闪电侠', description: '快速浏览20张照片', threshold: 20, unlocked: false, icon: '⚡' }
        };

        this.stats = {
            photosViewed: 0,
            timeSpent: 0,
            searchesPerformed: 0,
            filtersUsed: new Set(),
            themeSwitches: 0,
            quickViews: 0,
            startTime: Date.now()
        };

        this.initializeSystem();
        this.startTimeTracking();
        this.createUI();
    }

    initializeSystem() {
        // 从localStorage加载数据
        this.loadProgress();
        
        // 设置事件监听器
        this.setupEventListeners();
        
        // 创建粒子系统
        this.createParticleSystem();
        
        // 初始化连击系统
        this.comboSystem = new ComboSystem();
    }

    setupEventListeners() {
        // 照片浏览统计
        document.addEventListener('lightboxImageChanged', () => {
            this.stats.photosViewed++;
            this.checkAchievements();
            this.saveProgress();
        });

        // 搜索统计
        document.addEventListener('searchPerformed', () => {
            this.stats.searchesPerformed++;
            this.checkAchievements();
        });

        // 滤镜使用统计
        document.addEventListener('filterUsed', (e) => {
            this.stats.filtersUsed.add(e.detail.filter);
            this.checkAchievements();
        });

        // 主题切换统计
        document.addEventListener('themeChanged', () => {
            this.stats.themeSwitches++;
            this.checkAchievements();
        });

        // 快速浏览检测
        this.lastViewTime = 0;
        document.addEventListener('lightboxImageChanged', () => {
            const now = Date.now();
            if (now - this.lastViewTime < 2000) { // 2秒内切换
                this.stats.quickViews++;
                this.showComboEffect();
            }
            this.lastViewTime = now;
            this.checkAchievements();
        });
    }

    startTimeTracking() {
        setInterval(() => {
            this.stats.timeSpent = Date.now() - this.stats.startTime;
            this.checkAchievements();
            this.saveProgress();
        }, 10000); // 每10秒检查一次
    }

    checkAchievements() {
        Object.keys(this.achievements).forEach(key => {
            const achievement = this.achievements[key];
            if (!achievement.unlocked) {
                let progress = 0;
                
                switch(key) {
                    case 'explorer':
                    case 'photographer':
                    case 'master':
                        progress = this.stats.photosViewed;
                        break;
                    case 'timekeeper':
                        progress = this.stats.timeSpent;
                        break;
                    case 'searcher':
                        progress = this.stats.searchesPerformed;
                        break;
                    case 'filter_master':
                        progress = this.stats.filtersUsed.size;
                        break;
                    case 'night_owl':
                        progress = this.stats.themeSwitches;
                        break;
                    case 'speed_demon':
                        progress = this.stats.quickViews;
                        break;
                }

                if (progress >= achievement.threshold) {
                    this.unlockAchievement(key);
                }
            }
        });
    }

    unlockAchievement(key) {
        const achievement = this.achievements[key];
        achievement.unlocked = true;
        
        this.showAchievementNotification(achievement);
        this.createAchievementEffect();
        this.playAchievementSound();
        
        // 更新UI
        this.updateAchievementsUI();
        this.saveProgress();
    }

    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-content">
                <h3>成就解锁！</h3>
                <h4>${achievement.name}</h4>
                <p>${achievement.description}</p>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }, 4000);
    }

    createAchievementEffect() {
        // 创建庆祝特效
        for (let i = 0; i < 20; i++) {
            this.createCelebrationParticle();
        }
    }

    createCelebrationParticle() {
        const particle = document.createElement('div');
        particle.className = 'celebration-particle';
        
        const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            left: ${Math.random() * window.innerWidth}px;
            top: -10px;
        `;
        
        document.body.appendChild(particle);
        
        const fallDistance = window.innerHeight + 50;
        const duration = Math.random() * 3000 + 2000;
        
        particle.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${fallDistance}px) rotate(720deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        };
    }

    playAchievementSound() {
        if (window.advancedEffects && window.advancedEffects.audioContext) {
            // 播放成就音效
            this.createAchievementTone();
        }
    }

    createAchievementTone() {
        const audioContext = window.advancedEffects.audioContext;
        if (!audioContext) return;

        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
        notes.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = freq;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.5);
            }, index * 200);
        });
    }

    showComboEffect() {
        const combo = document.createElement('div');
        combo.className = 'combo-effect';
        combo.textContent = 'COMBO!';
        combo.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #ffd700;
            font-size: 2rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            z-index: 10001;
            pointer-events: none;
            animation: comboAnimation 1s ease-out forwards;
        `;
        
        document.body.appendChild(combo);
        
        setTimeout(() => {
            if (combo.parentNode) {
                combo.parentNode.removeChild(combo);
            }
        }, 1000);
    }

    createUI() {
        // 创建成就按钮
        const achievementBtn = document.createElement('button');
        achievementBtn.className = 'achievement-button floating';
        achievementBtn.innerHTML = '🏆';
        achievementBtn.title = '查看成就';
        
        achievementBtn.addEventListener('click', () => {
            this.showAchievementsPanel();
        });
        
        document.body.appendChild(achievementBtn);

        // 创建成就面板
        this.createAchievementsPanel();
        
        // 创建进度提示
        this.createProgressToast();
    }

    createAchievementsPanel() {
        const panel = document.createElement('div');
        panel.className = 'achievements-panel hidden';
        panel.innerHTML = `
            <div class="achievements-header">
                <h2>🏆 成就系统</h2>
                <button class="close-achievements">×</button>
            </div>
            <div class="achievements-stats">
                <div class="stat-item">
                    <span class="stat-value">${this.stats.photosViewed}</span>
                    <span class="stat-label">照片浏览</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${Math.floor(this.stats.timeSpent / 60000)}</span>
                    <span class="stat-label">分钟在线</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${Object.values(this.achievements).filter(a => a.unlocked).length}</span>
                    <span class="stat-label">已解锁</span>
                </div>
            </div>
            <div class="achievements-grid" id="achievementsGrid">
                <!-- 成就将动态添加到这里 -->
            </div>
        `;
        
        document.body.appendChild(panel);
        this.achievementsPanel = panel;
        
        // 绑定关闭事件
        panel.querySelector('.close-achievements').addEventListener('click', () => {
            this.hideAchievementsPanel();
        });
        
        this.updateAchievementsUI();
    }

    updateAchievementsUI() {
        const grid = document.getElementById('achievementsGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        Object.keys(this.achievements).forEach(key => {
            const achievement = this.achievements[key];
            const item = document.createElement('div');
            item.className = `achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`;
            
            let progress = this.getAchievementProgress(key);
            let progressPercent = Math.min((progress / achievement.threshold) * 100, 100);
            
            item.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-info">
                    <h4>${achievement.name}</h4>
                    <p>${achievement.description}</p>
                    <div class="achievement-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                        <span class="progress-text">${progress}/${achievement.threshold}</span>
                    </div>
                </div>
                ${achievement.unlocked ? '<div class="achievement-badge">✓</div>' : ''}
            `;
            
            grid.appendChild(item);
        });
        
        // 更新统计
        const statsItems = this.achievementsPanel.querySelectorAll('.stat-value');
        if (statsItems.length >= 3) {
            statsItems[0].textContent = this.stats.photosViewed;
            statsItems[1].textContent = Math.floor(this.stats.timeSpent / 60000);
            statsItems[2].textContent = Object.values(this.achievements).filter(a => a.unlocked).length;
        }
    }

    getAchievementProgress(key) {
        switch(key) {
            case 'explorer':
            case 'photographer':
            case 'master':
                return this.stats.photosViewed;
            case 'timekeeper':
                return this.stats.timeSpent;
            case 'searcher':
                return this.stats.searchesPerformed;
            case 'filter_master':
                return this.stats.filtersUsed.size;
            case 'night_owl':
                return this.stats.themeSwitches;
            case 'speed_demon':
                return this.stats.quickViews;
            default:
                return 0;
        }
    }

    showAchievementsPanel() {
        this.achievementsPanel.classList.remove('hidden');
        this.achievementsPanel.style.animation = 'slideInUp 0.3s ease forwards';
        this.updateAchievementsUI();
    }

    hideAchievementsPanel() {
        this.achievementsPanel.style.animation = 'slideOutDown 0.3s ease forwards';
        setTimeout(() => {
            this.achievementsPanel.classList.add('hidden');
        }, 300);
    }

    createProgressToast() {
        // 定期显示进度提示
        setInterval(() => {
            if (Math.random() < 0.1) { // 10%概率
                this.showRandomProgressToast();
            }
        }, 30000); // 每30秒检查一次
    }

    showRandomProgressToast() {
        const unlockedAchievements = Object.keys(this.achievements).filter(key => 
            !this.achievements[key].unlocked && this.getAchievementProgress(key) > 0
        );
        
        if (unlockedAchievements.length === 0) return;
        
        const randomKey = unlockedAchievements[Math.floor(Math.random() * unlockedAchievements.length)];
        const achievement = this.achievements[randomKey];
        const progress = this.getAchievementProgress(randomKey);
        
        if (progress / achievement.threshold > 0.5) { // 进度超过50%时显示
            this.showProgressHint(achievement, progress);
        }
    }

    showProgressHint(achievement, progress) {
        const hint = document.createElement('div');
        hint.className = 'progress-hint';
        hint.innerHTML = `
            <div class="hint-icon">${achievement.icon}</div>
            <div class="hint-content">
                <p>距离解锁"${achievement.name}"还需要 ${achievement.threshold - progress} 次</p>
            </div>
        `;
        
        document.body.appendChild(hint);
        
        setTimeout(() => {
            hint.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            hint.classList.remove('show');
            setTimeout(() => {
                if (hint.parentNode) {
                    hint.parentNode.removeChild(hint);
                }
            }, 300);
        }, 3000);
    }

    createParticleSystem() {
        // 创建背景粒子系统用于庆祝
        this.particles = [];
        this.particleCanvas = document.createElement('canvas');
        this.particleCanvas.className = 'particle-canvas';
        this.particleCanvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        `;
        document.body.appendChild(this.particleCanvas);
        
        this.ctx = this.particleCanvas.getContext('2d');
        this.resizeCanvas();
        
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.particleCanvas.width = window.innerWidth;
        this.particleCanvas.height = window.innerHeight;
    }

    saveProgress() {
        const saveData = {
            achievements: this.achievements,
            stats: {
                ...this.stats,
                filtersUsed: Array.from(this.stats.filtersUsed)
            }
        };
        localStorage.setItem('photoGalleryProgress', JSON.stringify(saveData));
    }

    loadProgress() {
        const saved = localStorage.getItem('photoGalleryProgress');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.achievements = { ...this.achievements, ...data.achievements };
                this.stats = { 
                    ...this.stats, 
                    ...data.stats,
                    filtersUsed: new Set(data.stats.filtersUsed || [])
                };
            } catch (e) {
                console.log('Failed to load progress');
            }
        }
    }
}

// 连击系统
class ComboSystem {
    constructor() {
        this.combo = 0;
        this.lastActionTime = 0;
        this.comboTimeout = 3000; // 3秒内连击有效
    }

    addCombo() {
        const now = Date.now();
        if (now - this.lastActionTime < this.comboTimeout) {
            this.combo++;
            this.showCombo();
        } else {
            this.combo = 1;
        }
        this.lastActionTime = now;
    }

    showCombo() {
        if (this.combo > 3) {
            const comboElement = document.createElement('div');
            comboElement.className = 'combo-display';
            comboElement.textContent = `${this.combo}x COMBO!`;
            comboElement.style.cssText = `
                position: fixed;
                top: 20%;
                right: 20px;
                background: linear-gradient(45deg, #ff6b6b, #ffd93d);
                color: white;
                padding: 10px 20px;
                border-radius: 25px;
                font-weight: bold;
                font-size: 1.2rem;
                z-index: 10000;
                animation: comboAnimation 2s ease-out forwards;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            `;
            
            document.body.appendChild(comboElement);
            
            setTimeout(() => {
                if (comboElement.parentNode) {
                    comboElement.parentNode.removeChild(comboElement);
                }
            }, 2000);
        }
    }
}

// CSS样式
const gamificationStyles = document.createElement('style');
gamificationStyles.textContent = `
    .achievement-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(45deg, #ffd700, #ffed4e);
        color: white;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
        z-index: 1000;
        transition: all 0.3s ease;
    }

    .achievement-button:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 25px rgba(255, 215, 0, 0.6);
    }

    .achievement-button.floating {
        animation: float 3s ease-in-out infinite;
    }

    .achievements-panel {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 600px;
        background: var(--card-background);
        backdrop-filter: blur(20px);
        border-radius: 20px 20px 0 0;
        box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.2);
        z-index: 10002;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid var(--border-color);
    }

    .achievements-panel.hidden {
        display: none;
    }

    .achievements-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid var(--border-color);
        position: sticky;
        top: 0;
        background: var(--card-background);
        backdrop-filter: blur(20px);
    }

    .achievements-header h2 {
        margin: 0;
        color: var(--text-primary);
        font-size: 1.5rem;
    }

    .close-achievements {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: var(--text-secondary);
        padding: 4px;
        border-radius: 4px;
        transition: all 0.2s ease;
    }

    .close-achievements:hover {
        background: var(--background-hover);
        color: var(--text-primary);
    }

    .achievements-stats {
        display: flex;
        justify-content: space-around;
        padding: 20px;
        background: var(--background);
    }

    .stat-item {
        text-align: center;
    }

    .stat-value {
        display: block;
        font-size: 2rem;
        font-weight: bold;
        color: var(--primary-color);
    }

    .stat-label {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }

    .achievements-grid {
        padding: 20px;
        display: grid;
        gap: 16px;
    }

    .achievement-item {
        display: flex;
        align-items: center;
        padding: 16px;
        background: var(--background);
        border-radius: 12px;
        transition: all 0.3s ease;
        position: relative;
        border: 1px solid var(--border-color);
    }

    .achievement-item.unlocked {
        background: linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
        border-color: var(--primary-color);
    }

    .achievement-item.locked {
        opacity: 0.6;
    }

    .achievement-icon {
        font-size: 2rem;
        margin-right: 16px;
        min-width: 60px;
        text-align: center;
    }

    .achievement-info {
        flex: 1;
    }

    .achievement-info h4 {
        margin: 0 0 4px 0;
        color: var(--text-primary);
        font-size: 1.1rem;
    }

    .achievement-info p {
        margin: 0 0 8px 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }

    .achievement-progress {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .progress-bar {
        flex: 1;
        height: 6px;
        background: var(--border-color);
        border-radius: 3px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
        transition: width 0.3s ease;
    }

    .progress-text {
        font-size: 0.8rem;
        color: var(--text-secondary);
        min-width: 60px;
        text-align: right;
    }

    .achievement-badge {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 24px;
        height: 24px;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
    }

    .achievement-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--card-background);
        backdrop-filter: blur(20px);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10003;
        transform: translateX(400px);
        transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        gap: 16px;
        max-width: 350px;
    }

    .achievement-notification.show {
        transform: translateX(0);
    }

    .achievement-notification .achievement-icon {
        font-size: 2.5rem;
        margin: 0;
    }

    .achievement-notification .achievement-content h3 {
        margin: 0 0 4px 0;
        color: var(--primary-color);
        font-size: 1rem;
        font-weight: bold;
    }

    .achievement-notification .achievement-content h4 {
        margin: 0 0 4px 0;
        color: var(--text-primary);
        font-size: 1.1rem;
    }

    .achievement-notification .achievement-content p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }

    .celebration-particle {
        box-shadow: 0 0 10px currentColor;
    }

    .progress-hint {
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: var(--card-background);
        backdrop-filter: blur(20px);
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        z-index: 10001;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 280px;
    }

    .progress-hint.show {
        transform: translateX(0);
    }

    .hint-icon {
        font-size: 1.5rem;
    }

    .hint-content p {
        margin: 0;
        color: var(--text-primary);
        font-size: 0.9rem;
    }

    @keyframes comboAnimation {
        0% { 
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
        }
        50% { 
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
        }
        100% { 
            transform: translate(-50%, -50%) scale(1) translateY(-50px);
            opacity: 0;
        }
    }

    @keyframes slideInUp {
        from { transform: translateX(-50%) translateY(100%); }
        to { transform: translateX(-50%) translateY(0); }
    }

    @keyframes slideOutDown {
        from { transform: translateX(-50%) translateY(0); }
        to { transform: translateX(-50%) translateY(100%); }
    }

    @media (max-width: 768px) {
        .achievements-panel {
            width: 95%;
        }
        
        .achievement-notification {
            right: 10px;
            max-width: 300px;
        }
        
        .progress-hint {
            right: 10px;
            max-width: 250px;
        }
        
        .achievement-button {
            bottom: 100px;
            right: 15px;
            width: 50px;
            height: 50px;
            font-size: 20px;
        }
    }
`;
document.head.appendChild(gamificationStyles);

// 初始化游戏化系统
document.addEventListener('DOMContentLoaded', () => {
    window.gamificationSystem = new GamificationSystem();
});

// 导出类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GamificationSystem, ComboSystem };
}
