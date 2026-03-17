[English](./README.md) | [繁體中文](./README.zh-TW.md)

# ShowXD 個人作品集

薛佾展（阿薛）的個人作品集網站 — 後端工程師。

**線上網址：** https://showxd.github.io

## 技術棧

- **框架：** Vue 3 + TypeScript
- **建構工具：** Vite 6
- **CSS：** UnoCSS（Utility-first）
- **PWA：** vite-plugin-pwa
- **聯絡表單：** Formspree
- **部署：** GitHub Pages（透過 GitHub Actions）

## 功能特色

- 粒子互動背景（支援滑鼠互動）
- 打字機動畫效果
- 滾動觸發區塊顯示動畫
- 自訂游標
- **語言切換** — English / 繁體中文（儲存於 localStorage）
- 聯絡表單（Formspree）
- PWA 支援（可安裝）
- 完整響應式設計

## 本地開發

```bash
npm install
npm run dev
```

開啟 http://localhost:5173

## 建構與預覽

```bash
npm run build
npm run preview
```

## 部署

推送至 `main` 分支後，GitHub Actions 自動部署至 `gh-pages` 分支 → GitHub Pages。

## 自訂內容

| 檔案 | 修改內容 |
|------|---------|
| `src/data/profile.ts` | 姓名、簡介、頭像、統計數字 |
| `src/data/skills.ts` | 技能列表 |
| `src/data/projects.ts` | 專案資料 |
| `src/data/experience.ts` | 工作經歷 |
| `src/data/social.ts` | GitHub、LinkedIn 連結 |
| `public/images/avatar.jpg` | 個人照片 |
| `src/locales/en.ts` | 英文翻譯（簡介、專案說明、UI 文字） |
| `src/locales/zh-TW.ts` | 繁體中文翻譯 |
