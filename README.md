# 柏俊男｜AI 策略产品经理

中文个人作品集，包含百度「文心老师」、美团商业化项目、教育背景、技能与爱好和联系方式。

## GitHub Pages

发布目标：`https://bjnyydsiboy.github.io/`。

仓库使用 `.github/workflows/pages.yml`，在 `main` 分支更新后生成静态页面并发布到 GitHub Pages。仓库 Settings → Pages 的 Source 应设置为 GitHub Actions。

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://bjnyydsiboy.github.io/ npm run build:pages
```

静态文件生成在 `out/`。`NEXT_PUBLIC_BASE_PATH` 支持 `/portfolio` 等项目子路径；用户首页仓库留空即可。构建时图片使用本地静态资源，页面浏览不依赖登录或后端。

## 本地开发

```bash
npm run dev
```

## 内容维护

- `data/portfolio.ts`：项目简介和指标
- `data/guide.ts`：项目向导问答
- `components/baidu-case-study.tsx`：百度项目详情
- `components/structured-commerce-case-study.tsx`：美团项目详情
- `app/globals.css`：页面样式及响应式规则
- `public/assets/`：项目图片和演示视频
- `public/docs/resume.pdf`：可下载的简历

每次修改后检查桌面与 wise 移动端布局、导航、卡片展开、项目跳转和下载链接。
