export default {
  lang: '中',
  nav: {
    home: '首頁',
    about: '關於',
    skills: '技能',
    projects: '專案',
    experience: '經歷',
    contact: '聯絡',
  },
  hero: {
    greeting: '嗨，我是',
    taglines: ['後端工程師', 'Python 開發者', '資料驅動後端工程師', 'AI & ML 愛好者'],
    bio: `我是一位資料驅動的後端工程師，擁有 Python、AI 和資料分析的深厚背景。
  專注於建立可擴展的 RESTful API、設計強健的資料模型，以及將機器學習管線整合至生產系統。
  熱衷於乾淨的架構設計，將原始資料轉化為可行的洞察。`,
    cta_work: '查看作品',
    cta_contact: '聯絡我',
  },
  about: {
    title: '關於我',
    subtitle: '簡單介紹一下我是誰，以及我做些什麼。',
    who_am_i: '我是誰？',
    available: '開放合作機會',
    stats: {
      years_exp: '年工作經驗',
      projects: '完成專案',
      technologies: '熟悉技術',
      repos: 'GitHub 倉庫',
    },
  },
  skills: {
    title: '技能',
    subtitle: '我日常工作中使用的技術與工具。',
    categories: {
      all: '全部',
      backend: '後端',
      database: '資料庫',
      ai: 'AI / ML',
      devops: 'DevOps',
      frontend: '前端',
    },
  },
  projects: {
    title: '專案',
    subtitle: '我建立過的一些作品 — 從個人專案到正式產品。',
    featured: '精選',
    view_source: '查看原始碼',
    view_demo: '查看線上展示',
    categories: {
      all: '所有專案',
      fullstack: '全端',
      frontend: '前端',
      backend: '後端',
    },
    items: {
      'project-1': {
        description: '一個即時開發者儀表板，將 GitHub 活動、CI/CD 狀態和部署指標整合在一個精美的介面中。',
      },
      'project-2': {
        description: '一個瀏覽器內的像素藝術編輯器，支援圖層、動畫時間軸，並可一鍵匯出 GIF/PNG 格式。',
      },
      'project-3': {
        description: '一個極簡筆記應用，支援 Markdown、標籤分類，以及透過 IndexedDB 的本地優先同步。',
      },
      'project-4': {
        description: '一個輕量 REST API 模擬伺服器，具備請求錄製、回應模板及 JSON 匯出團隊共享功能。',
      },
      'project-5': {
        description: '基於 D3.js 的可重用 Vue 3 圖表元件集合，支援 12+ 種圖表類型，內建深色模式。',
      },
      'project-6': {
        description: '使用 Python 和 Flask 建立的團隊任務管理 API，具備 JWT 認證、WebSocket 通知和角色權限控制。',
      },
    },
  },
  experience: {
    title: '工作經歷',
    subtitle: '我的職業歷程與學術背景。',
    items: {
      'exp-1': {
        description: [
          '主導舊版 jQuery 應用遷移至 Vue 3，Bundle 體積縮小 40%，Lighthouse 分數從 62 提升至 94。',
          '設計並實作即時儀表板功能，每日服務超過 1 萬名活躍用戶。',
          '指導 3 名初級開發者，建立前端 Code Review 規範。',
        ],
      },
      'exp-2': {
        description: [
          '從零建立並上線 4 個 SaaS 產品，同時負責前端（Vue）和後端（Flask/Node.js）開發。',
          '使用 Docker 和 GitHub Actions 設計微服務架構，部署時間縮短 60%。',
          '整合 Stripe 付款處理與 Google/GitHub OAuth 登入。',
        ],
      },
      'exp-3': {
        description: [
          '完成 8 個客戶專案，包括電商平台、落地頁和管理後台。',
          '專注於效能最佳化，所有專案均達到 90+ Lighthouse 分數。',
        ],
      },
      'edu-1': {
        description: [
          '以優等成績畢業。論文題目：「單頁應用效能最佳化技術研究」。',
          '擔任網頁開發社社長，為 200+ 名學生舉辦 12 場工作坊。',
        ],
      },
    },
  },
  contact: {
    title: '聯絡我',
    subtitle: '有專案想法嗎？很期待聽你說。',
    info_text: '我目前對新機會持開放態度 — 無論是全職工作、自由接案，還是純粹聊聊技術。隨時歡迎來信！',
    email_label: '電子郵件',
    location_label: '所在地',
    find_me_on: '找到我',
    form: {
      title: '傳送訊息',
      name: '姓名',
      email: '電子郵件',
      message: '訊息內容',
      name_placeholder: '王小明',
      email_placeholder: 'example@gmail.com',
      message_placeholder: '告訴我你的想法...',
      submit: '送出訊息',
      submitting: '傳送中...',
      success: '訊息已送出！我會盡快回覆你。',
      error: '出現錯誤，請直接寄信給我。',
      err_name: '請輸入姓名。',
      err_email: '請輸入有效的電子郵件。',
      err_message: '訊息至少需要 10 個字元。',
    },
  },
  footer: {
    built_with: '使用 Vue 3、UnoCSS &',
  },
}
