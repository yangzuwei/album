# 精美相册 - Photo Gallery

一个现代化的、响应式的相册展示网站，具有精美的设计和流畅的用户体验。

## 🌟 特性

- **现代化设计** - 简洁优雅的界面设计
- **响应式布局** - 完美适配桌面端和移动端
- **瀑布流/网格布局** - 支持两种展示模式切换
- **图片懒加载** - 优化页面加载性能
- **灯箱效果** - 沉浸式图片浏览体验
- **分类筛选** - 按类别筛选图片
- **搜索功能** - 快速搜索图片
- **触摸手势** - 移动端滑动切换图片
- **PWA支持** - 可安装为手机应用
- **Service Worker** - 离线缓存支持

## 🚀 部署到 Cloudflare Pages

### 方法一：通过 Git 仓库部署

1. 将代码推送到 GitHub/GitLab 仓库
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. 选择 "Pages" > "Create a project"
4. 连接你的 Git 仓库
5. 配置构建设置：
   - Framework preset: `None`
   - Build command: (留空)
   - Build output directory: `/`
6. 点击 "Save and Deploy"

### 方法二：直接上传文件

1. 将所有文件打包成 ZIP
2. 登录 Cloudflare Dashboard
3. 选择 "Pages" > "Create a project" > "Upload assets"
4. 上传 ZIP 文件
5. 输入项目名称并部署

## 📁 项目结构

```
album/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── app.js         # 主要功能脚本
├── sw.js              # Service Worker
├── manifest.json      # PWA 配置
└── README.md          # 项目说明
```

## 🎨 自定义

### 添加你的图片

编辑 `js/app.js` 文件中的 `photoData` 数组，替换为你自己的图片：

```javascript
const photoData = [
    {
        id: 1,
        title: "图片标题",
        description: "图片描述",
        category: "nature", // nature, city, portrait, food
        date: "2024-01-15",
        image: "你的图片URL",
        thumbnail: "缩略图URL"
    },
    // 更多图片...
];
```

### 🖼️ 精美图片资源推荐

#### **免费高质量图片网站**

1. **Unsplash** ⭐⭐⭐⭐⭐
   - 网址：https://unsplash.com/
   - 特点：高质量、免费、无版权限制
   - 推荐搜索：nature, architecture, portrait, food, minimalist

2. **Pexels** ⭐⭐⭐⭐⭐
   - 网址：https://www.pexels.com/
   - 特点：免费、高分辨率、商用友好
   - 有中文界面，搜索方便

3. **Pixabay** ⭐⭐⭐⭐
   - 网址：https://pixabay.com/
   - 特点：免费、多样化、包含插图和矢量图

#### **Unsplash 图片 URL 构建技巧**

```javascript
// 基础格式
https://images.unsplash.com/photo-[PHOTO_ID]?ixlib=rb-4.0.3&auto=format&fit=crop&w=WIDTH&q=QUALITY

// 示例：获取不同尺寸的图片
const photoId = "1506905925346-21bda4d32df4";
const fullSize = `https://images.unsplash.com/photo-${photoId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80`;
const thumbnail = `https://images.unsplash.com/photo-${photoId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`;

// 使用搜索关键词获取随机图片
https://source.unsplash.com/800x600/?nature
https://source.unsplash.com/800x600/?city,architecture
https://source.unsplash.com/800x600/?portrait,people
https://source.unsplash.com/800x600/?food,cooking
```

#### **推荐的图片主题和关键词**

**自然风光 (nature):**
- `landscape, mountains, forest, ocean, sunset, stars`
- `waterfall, beach, desert, autumn, spring, winter`
- `flowers, trees, wildlife, valley, lake, river`

**城市建筑 (city):**
- `architecture, building, urban, skyline, street`
- `modern, classic, bridge, tower, downtown`
- `night, lights, reflection, geometric, minimal`

**人像摄影 (portrait):**
- `people, person, face, model, expression`
- `business, lifestyle, family, children, elderly`
- `black-and-white, natural-light, studio, fashion`

**美食摄影 (food):**
- `cooking, restaurant, meal, dish, ingredients`
- `coffee, dessert, bread, fruit, vegetables`
- `plating, colorful, rustic, elegant, healthy`

### 使用丰富图片数据

项目中已包含 `enriched-photos.js`，包含32张精选高质量图片：

```html
<!-- 在 HTML 中引入 -->
<script src="js/enriched-photos.js"></script>

<!-- 然后在 app.js 中使用 -->
<script>
// 使用丰富的图片数据替换原有数据
const photoData = enrichedPhotoData;
</script>
```

### 修改主题色彩

在 `css/style.css` 中修改 CSS 变量：

```css
:root {
    --primary-color: #6366f1;  /* 主色调 */
    --accent-color: #06b6d4;   /* 强调色 */
    /* 其他颜色变量... */
}
```

### 添加新的分类

1. 在 `photoData` 中使用新的 category 值
2. 在 HTML 中添加新的导航按钮
3. 在 `getCategoryName()` 函数中添加分类映射

## 🔧 功能说明

### 图片分类
- **全部** - 显示所有图片
- **自然** - 自然风光照片
- **城市** - 城市建筑照片  
- **人像** - 人物肖像照片
- **美食** - 美食摄影照片

### 视图模式
- **网格模式** - 规整的网格布局
- **瀑布流模式** - 不同高度的瀑布流布局

### 搜索功能
支持按图片标题、描述和分类进行搜索

### 键盘快捷键
- `ESC` - 关闭灯箱
- `←` - 上一张图片
- `→` - 下一张图片

## 📱 移动端优化

- 触摸滑动切换图片
- 响应式布局适配
- 优化的触摸交互
- 移动端友好的界面设计

## 🌐 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

如有问题或建议，请通过以下方式联系：
- 创建 Issue
- 发送邮件

---

**享受你的精美相册吧！📸**
