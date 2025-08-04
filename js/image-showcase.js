// 高级图片展示特效系统
class ImageShowcaseEffects {
    constructor() {
        this.currentFilter = 'none';
        this.setupFilters();
        this.setupGestureControls();
        this.setupAdvancedLightbox();
        this.setupImageComparison();
    }

    setupFilters() {
        this.filters = {
            vintage: 'sepia(0.8) contrast(1.2) brightness(1.1) saturate(0.8)',
            cinematic: 'contrast(1.3) brightness(0.9) saturate(1.2) hue-rotate(5deg)',
            dreamy: 'blur(0.5px) brightness(1.1) saturate(1.3) contrast(0.9)',
            dramatic: 'contrast(1.5) brightness(0.8) saturate(1.4) grayscale(0.2)',
            warm: 'sepia(0.3) saturate(1.2) brightness(1.1) hue-rotate(10deg)',
            cool: 'saturate(1.1) brightness(1.05) hue-rotate(-10deg) contrast(1.1)',
            bw: 'grayscale(1) contrast(1.2) brightness(1.1)',
            neon: 'contrast(1.4) brightness(1.2) saturate(2) hue-rotate(270deg)'
        };

        this.createFilterControls();
    }

    createFilterControls() {
        const filterPanel = document.createElement('div');
        filterPanel.className = 'filter-panel hidden';
        filterPanel.innerHTML = `
            <div class="filter-header">
                <h3>滤镜效果</h3>
                <button class="filter-close">×</button>
            </div>
            <div class="filter-grid">
                <button class="filter-btn active" data-filter="none">原图</button>
                ${Object.keys(this.filters).map(filter => 
                    `<button class="filter-btn" data-filter="${filter}">${this.getFilterName(filter)}</button>`
                ).join('')}
            </div>
            <div class="filter-intensity">
                <label>强度: <input type="range" id="filterIntensity" min="0" max="100" value="100"></label>
            </div>
        `;

        document.body.appendChild(filterPanel);
        this.filterPanel = filterPanel;

        // 添加事件监听
        filterPanel.addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                this.applyFilter(e.target.dataset.filter);
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
            }
            if (e.target.matches('.filter-close')) {
                this.hideFilterPanel();
            }
        });

        document.getElementById('filterIntensity').addEventListener('input', (e) => {
            this.updateFilterIntensity(e.target.value / 100);
        });
    }

    getFilterName(filter) {
        const names = {
            vintage: '复古',
            cinematic: '电影',
            dreamy: '梦幻',
            dramatic: '戏剧',
            warm: '暖色',
            cool: '冷色',
            bw: '黑白',
            neon: '霓虹'
        };
        return names[filter] || filter;
    }

    applyFilter(filterName) {
        const lightboxImage = document.getElementById('lightboxImage');
        if (!lightboxImage) return;

        this.currentFilter = filterName;
        
        if (filterName === 'none') {
            lightboxImage.style.filter = 'none';
        } else {
            lightboxImage.style.filter = this.filters[filterName];
            
            // 触发滤镜使用事件用于成就系统
            document.dispatchEvent(new CustomEvent('filterUsed', {
                detail: { filter: filterName }
            }));
        }

        // 添加过渡效果
        lightboxImage.style.transition = 'filter 0.3s ease';
    }

    updateFilterIntensity(intensity) {
        const lightboxImage = document.getElementById('lightboxImage');
        if (!lightboxImage || this.currentFilter === 'none') return;

        const filter = this.filters[this.currentFilter];
        if (filter) {
            // 调整滤镜强度
            const adjustedFilter = this.adjustFilterIntensity(filter, intensity);
            lightboxImage.style.filter = adjustedFilter;
        }
    }

    adjustFilterIntensity(filter, intensity) {
        // 简化版本：通过不透明度混合来调整强度
        return `${filter} opacity(${intensity})`;
    }

    showFilterPanel() {
        this.filterPanel.classList.remove('hidden');
        this.filterPanel.style.animation = 'slideInRight 0.3s ease forwards';
    }

    hideFilterPanel() {
        this.filterPanel.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => {
            this.filterPanel.classList.add('hidden');
        }, 300);
    }

    setupGestureControls() {
        // 触摸手势控制
        let isZooming = false;
        let initialDistance = 0;
        let currentScale = 1;

        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        lightbox.addEventListener('touchstart', (e) => {
            if (e.touches.length === 2) {
                isZooming = true;
                initialDistance = this.getDistance(e.touches[0], e.touches[1]);
                e.preventDefault();
            }
        });

        lightbox.addEventListener('touchmove', (e) => {
            if (isZooming && e.touches.length === 2) {
                const currentDistance = this.getDistance(e.touches[0], e.touches[1]);
                const scale = (currentDistance / initialDistance) * currentScale;
                
                const lightboxImage = document.getElementById('lightboxImage');
                if (lightboxImage) {
                    lightboxImage.style.transform = `scale(${Math.max(0.5, Math.min(3, scale))})`;
                }
                e.preventDefault();
            }
        });

        lightbox.addEventListener('touchend', (e) => {
            if (e.touches.length < 2) {
                isZooming = false;
                const lightboxImage = document.getElementById('lightboxImage');
                if (lightboxImage) {
                    const transform = lightboxImage.style.transform;
                    const scaleMatch = transform.match(/scale\(([^)]+)\)/);
                    if (scaleMatch) {
                        currentScale = parseFloat(scaleMatch[1]);
                    }
                }
            }
        });
    }

    getDistance(touch1, touch2) {
        const dx = touch1.clientX - touch2.clientX;
        const dy = touch1.clientY - touch2.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    setupAdvancedLightbox() {
        // 增强的灯箱功能
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        // 检查是否已经添加了控制面板
        if (lightbox.querySelector('.lightbox-advanced-controls')) {
            return; // 已经存在，避免重复添加
        }

        // 添加更多控制按钮
        const controls = document.createElement('div');
        controls.className = 'lightbox-advanced-controls';
        controls.innerHTML = `
            <button class="control-btn" id="zoomIn" title="放大">🔍+</button>
            <button class="control-btn" id="zoomOut" title="缩小">🔍-</button>
            <button class="control-btn" id="rotateLeft" title="左转">↺</button>
            <button class="control-btn" id="rotateRight" title="右转">↻</button>
            <button class="control-btn" id="toggleFilter" title="滤镜">🎨</button>
            <button class="control-btn" id="downloadImage" title="下载">💾</button>
            <button class="control-btn" id="shareImage" title="分享">📤</button>
            <button class="control-btn" id="imageInfo" title="信息">ℹ️</button>
        `;

        lightbox.querySelector('.lightbox-content').appendChild(controls);

        // 绑定控制事件
        this.bindAdvancedControls();

        // 添加键盘快捷键
        this.setupKeyboardShortcuts();

        // 绑定主页面滤镜按钮
        this.setupMainFilterButton();
    }

    bindAdvancedControls() {
        let currentZoom = 1;
        let currentRotation = 0;

        document.getElementById('zoomIn')?.addEventListener('click', () => {
            currentZoom = Math.min(currentZoom * 1.2, 5);
            this.updateImageTransform(currentZoom, currentRotation);
        });

        document.getElementById('zoomOut')?.addEventListener('click', () => {
            currentZoom = Math.max(currentZoom / 1.2, 0.2);
            this.updateImageTransform(currentZoom, currentRotation);
        });

        document.getElementById('rotateLeft')?.addEventListener('click', () => {
            currentRotation -= 90;
            this.updateImageTransform(currentZoom, currentRotation);
        });

        document.getElementById('rotateRight')?.addEventListener('click', () => {
            currentRotation += 90;
            this.updateImageTransform(currentZoom, currentRotation);
        });

        document.getElementById('toggleFilter')?.addEventListener('click', () => {
            this.showFilterPanel();
        });

        document.getElementById('downloadImage')?.addEventListener('click', () => {
            this.downloadCurrentImage();
        });

        document.getElementById('shareImage')?.addEventListener('click', () => {
            this.shareCurrentImage();
        });

        document.getElementById('imageInfo')?.addEventListener('click', () => {
            this.showImageInfo();
        });

        // 重置变换当切换图片时
        document.addEventListener('lightboxImageChanged', () => {
            currentZoom = 1;
            currentRotation = 0;
            this.updateImageTransform(currentZoom, currentRotation);
        });
    }

    updateImageTransform(zoom, rotation) {
        const lightboxImage = document.getElementById('lightboxImage');
        if (lightboxImage) {
            lightboxImage.style.transform = `scale(${zoom}) rotate(${rotation}deg)`;
            lightboxImage.style.transition = 'transform 0.3s ease';
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (!document.getElementById('lightbox').classList.contains('active')) return;

            switch(e.key) {
                case '+':
                case '=':
                    document.getElementById('zoomIn')?.click();
                    e.preventDefault();
                    break;
                case '-':
                    document.getElementById('zoomOut')?.click();
                    e.preventDefault();
                    break;
                case 'r':
                    document.getElementById('rotateRight')?.click();
                    e.preventDefault();
                    break;
                case 'R':
                    document.getElementById('rotateLeft')?.click();
                    e.preventDefault();
                    break;
                case 'f':
                    document.getElementById('toggleFilter')?.click();
                    e.preventDefault();
                    break;
                case 'd':
                    document.getElementById('downloadImage')?.click();
                    e.preventDefault();
                    break;
                case 's':
                    document.getElementById('shareImage')?.click();
                    e.preventDefault();
                    break;
                case 'i':
                    document.getElementById('imageInfo')?.click();
                    e.preventDefault();
                    break;
            }
        });
    }

    downloadCurrentImage() {
        const lightboxImage = document.getElementById('lightboxImage');
        if (!lightboxImage || !lightboxImage.src) return;

        const link = document.createElement('a');
        link.href = lightboxImage.src;
        link.download = `photo_${Date.now()}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // 显示下载提示
        this.showToast('图片下载中...', 'success');
    }

    async shareCurrentImage() {
        const lightboxImage = document.getElementById('lightboxImage');
        if (!lightboxImage || !lightboxImage.src) return;

        if (navigator.share) {
            try {
                // 获取图片作为blob
                const response = await fetch(lightboxImage.src);
                const blob = await response.blob();
                const file = new File([blob], 'photo.jpg', { type: 'image/jpeg' });

                await navigator.share({
                    title: '精美相册 - 分享照片',
                    text: '来自精美相册的照片分享',
                    files: [file]
                });
            } catch (error) {
                this.fallbackShare(lightboxImage.src);
            }
        } else {
            this.fallbackShare(lightboxImage.src);
        }
    }

    fallbackShare(imageUrl) {
        // 复制链接到剪贴板
        navigator.clipboard.writeText(imageUrl).then(() => {
            this.showToast('图片链接已复制到剪贴板', 'success');
        }).catch(() => {
            this.showToast('分享功能暂不可用', 'error');
        });
    }

    showImageInfo() {
        const lightboxImage = document.getElementById('lightboxImage');
        if (!lightboxImage) return;

        const info = this.getImageInfo(lightboxImage);
        
        const infoModal = document.createElement('div');
        infoModal.className = 'image-info-modal';
        infoModal.innerHTML = `
            <div class="info-content">
                <h3>图片信息</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <label>尺寸:</label>
                        <span>${info.dimensions}</span>
                    </div>
                    <div class="info-item">
                        <label>文件名:</label>
                        <span>${info.filename}</span>
                    </div>
                    <div class="info-item">
                        <label>格式:</label>
                        <span>${info.format}</span>
                    </div>
                    <div class="info-item">
                        <label>加载时间:</label>
                        <span>${info.loadTime}</span>
                    </div>
                </div>
                <button class="close-info">关闭</button>
            </div>
        `;

        document.body.appendChild(infoModal);

        infoModal.querySelector('.close-info').addEventListener('click', () => {
            infoModal.remove();
        });

        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) {
                infoModal.remove();
            }
        });

        setTimeout(() => {
            infoModal.style.opacity = '1';
        }, 10);
    }

    getImageInfo(img) {
        const url = new URL(img.src);
        const filename = url.pathname.split('/').pop() || 'unknown';
        const format = filename.split('.').pop()?.toUpperCase() || 'Unknown';
        
        return {
            dimensions: `${img.naturalWidth} × ${img.naturalHeight}`,
            filename: filename,
            format: format,
            loadTime: new Date().toLocaleTimeString()
        };
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    setupImageComparison() {
        // 图片对比功能（为未来功能预留）
        this.comparisonMode = false;
    }

    setupMainFilterButton() {
        const mainFilterBtn = document.getElementById('filterToggleMain');
        if (mainFilterBtn) {
            mainFilterBtn.addEventListener('click', () => {
                // 如果灯箱是打开的，显示滤镜面板
                const lightbox = document.getElementById('lightbox');
                if (lightbox && lightbox.classList.contains('active')) {
                    this.showFilterPanel();
                } else {
                    // 如果灯箱未打开，显示提示
                    this.showFilterInstruction();
                }
            });
        }
    }

    showFilterInstruction() {
        const instruction = document.createElement('div');
        instruction.className = 'filter-instruction';
        instruction.innerHTML = `
            <div class="instruction-content">
                <h3>🎨 滤镜功能</h3>
                <p>请先点击任意照片进入查看模式，然后点击底部的滤镜按钮 🎨 来使用滤镜功能</p>
                <div class="instruction-demo">
                    <div class="demo-step">
                        <span class="step-number">1</span>
                        <span class="step-text">点击照片</span>
                    </div>
                    <div class="demo-arrow">→</div>
                    <div class="demo-step">
                        <span class="step-number">2</span>
                        <span class="step-text">点击 🎨 按钮</span>
                    </div>
                    <div class="demo-arrow">→</div>
                    <div class="demo-step">
                        <span class="step-number">3</span>
                        <span class="step-text">选择滤镜</span>
                    </div>
                </div>
                <button class="instruction-close">知道了</button>
            </div>
        `;
        
        document.body.appendChild(instruction);
        
        setTimeout(() => {
            instruction.classList.add('show');
        }, 100);
        
        instruction.querySelector('.instruction-close').addEventListener('click', () => {
            instruction.classList.remove('show');
            setTimeout(() => {
                if (instruction.parentNode) {
                    instruction.parentNode.removeChild(instruction);
                }
            }, 300);
        });
        
        // 自动关闭
        setTimeout(() => {
            if (instruction.parentNode) {
                instruction.classList.remove('show');
                setTimeout(() => {
                    if (instruction.parentNode) {
                        instruction.parentNode.removeChild(instruction);
                    }
                }, 300);
            }
        }, 5000);
    }

    // 图片预加载优化
    preloadAdjacentImages(currentIndex, photos) {
        const preloadIndexes = [
            currentIndex - 1,
            currentIndex + 1,
            currentIndex - 2,
            currentIndex + 2
        ].filter(i => i >= 0 && i < photos.length);

        preloadIndexes.forEach(index => {
            const img = new Image();
            img.src = photos[index].url;
        });
    }
}

// 相关CSS样式
const showcaseStyles = document.createElement('style');
showcaseStyles.textContent = `
    .filter-panel {
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        background: var(--card-background);
        backdrop-filter: blur(20px);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        z-index: 10001;
        width: 280px;
        border: 1px solid var(--border-color);
    }

    .filter-panel.hidden {
        display: none;
    }

    .filter-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--border-color);
    }

    .filter-header h3 {
        margin: 0;
        color: var(--text-primary);
        font-size: 16px;
        font-weight: 600;
    }

    .filter-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: var(--text-secondary);
        padding: 4px;
        border-radius: 4px;
        transition: all 0.2s ease;
    }

    .filter-close:hover {
        background: var(--background-hover);
        color: var(--text-primary);
    }

    .filter-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-bottom: 16px;
    }

    .filter-btn {
        padding: 8px 12px;
        border: 1px solid var(--border-color);
        background: var(--background);
        color: var(--text-primary);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 12px;
    }

    .filter-btn:hover {
        background: var(--background-hover);
        border-color: var(--primary-color);
    }

    .filter-btn.active {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
    }

    .filter-intensity {
        margin-top: 12px;
    }

    .filter-intensity label {
        display: block;
        color: var(--text-secondary);
        font-size: 12px;
        margin-bottom: 8px;
    }

    .filter-intensity input[type="range"] {
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background: var(--border-color);
        outline: none;
        -webkit-appearance: none;
    }

    .filter-intensity input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    .lightbox-advanced-controls {
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        padding: 12px;
        border-radius: 12px;
        z-index: 10002;
    }

    .control-btn {
        width: 40px;
        height: 40px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
    }

    .control-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.1);
    }

    .image-info-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10003;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .info-content {
        background: var(--card-background);
        padding: 24px;
        border-radius: 16px;
        width: 90%;
        max-width: 400px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .info-content h3 {
        margin: 0 0 16px 0;
        color: var(--text-primary);
        font-size: 18px;
        font-weight: 600;
    }

    .info-grid {
        display: grid;
        gap: 12px;
        margin-bottom: 20px;
    }

    .info-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid var(--border-color);
    }

    .info-item label {
        color: var(--text-secondary);
        font-weight: 500;
    }

    .info-item span {
        color: var(--text-primary);
    }

    .close-info {
        width: 100%;
        padding: 12px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.2s ease;
    }

    .close-info:hover {
        background: var(--primary-color-dark);
    }

    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: var(--card-background);
        color: var(--text-primary);
        border-radius: 8px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        z-index: 10004;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        border-left: 4px solid var(--primary-color);
    }

    .toast.toast-success {
        border-left-color: #10b981;
    }

    .toast.toast-error {
        border-left-color: #ef4444;
    }

    .toast.show {
        transform: translateX(0);
    }

    .filter-instruction {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10005;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .filter-instruction.show {
        opacity: 1;
    }

    .instruction-content {
        background: var(--card-background);
        padding: 30px;
        border-radius: 16px;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        text-align: center;
        border: 1px solid var(--border-color);
    }

    .instruction-content h3 {
        margin: 0 0 16px 0;
        color: var(--text-primary);
        font-size: 1.5rem;
    }

    .instruction-content p {
        margin: 0 0 24px 0;
        color: var(--text-secondary);
        line-height: 1.6;
    }

    .instruction-demo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 24px 0;
        flex-wrap: wrap;
    }

    .demo-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 16px;
        background: var(--background);
        border-radius: 12px;
        border: 1px solid var(--border-color);
        min-width: 80px;
    }

    .step-number {
        width: 24px;
        height: 24px;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 12px;
    }

    .step-text {
        color: var(--text-primary);
        font-size: 0.9rem;
        font-weight: 500;
    }

    .demo-arrow {
        color: var(--primary-color);
        font-size: 1.2rem;
        font-weight: bold;
    }

    .instruction-close {
        width: 100%;
        padding: 12px 24px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        font-size: 1rem;
        transition: all 0.2s ease;
        margin-top: 16px;
    }

    .instruction-close:hover {
        background: var(--primary-color-dark);
        transform: translateY(-1px);
    }

    @keyframes slideInRight {
        from { transform: translateX(100%) translateY(-50%); }
        to { transform: translateX(0) translateY(-50%); }
    }

    @keyframes slideOutRight {
        from { transform: translateX(0) translateY(-50%); }
        to { transform: translateX(100%) translateY(-50%); }
    }

    @media (max-width: 768px) {
        .filter-panel {
            right: 10px;
            width: 240px;
        }
        
        .lightbox-advanced-controls {
            bottom: 80px;
            gap: 6px;
            padding: 8px;
        }
        
        .control-btn {
            width: 36px;
            height: 36px;
            font-size: 14px;
        }
    }
`;
document.head.appendChild(showcaseStyles);

// 初始化图片展示特效
document.addEventListener('DOMContentLoaded', () => {
    window.imageShowcaseEffects = new ImageShowcaseEffects();
});

// 导出类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageShowcaseEffects;
}
