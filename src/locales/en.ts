export default {
  lang: 'EN',
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    taglines: ['Backend Engineer', 'Python Developer', 'Data-Driven Backend Engineer', 'AI & ML Enthusiast'],
    bio: `I am a Data-Driven Backend Engineer with a strong background in Python, AI, and data analysis.
  I specialize in building scalable RESTful APIs, designing robust data models, and integrating
  machine learning pipelines into production systems. Passionate about clean architecture and
  turning raw data into actionable insights.`,
    cta_work: 'View My Work',
    cta_contact: 'Get In Touch',
  },
  about: {
    title: 'About Me',
    subtitle: 'A brief introduction to who I am and what I do.',
    who_am_i: 'Who am I?',
    available: 'Available for opportunities',
    stats: {
      years_exp: 'Years Experience',
      projects: 'Projects Completed',
      technologies: 'Technologies',
      repos: 'GitHub Repos',
    },
  },
  skills: {
    title: 'Skills',
    subtitle: 'Technologies and tools I work with on a regular basis.',
    categories: {
      all: 'All',
      backend: 'Backend',
      database: 'Database',
      ai: 'AI / ML',
      devops: 'DevOps',
      frontend: 'Frontend',
    },
  },
  projects: {
    title: 'Projects',
    subtitle: "A selection of things I've built — from side projects to production apps.",
    featured: 'Featured',
    view_source: 'View source code',
    view_demo: 'View live demo',
    categories: {
      all: 'All Projects',
      fullstack: 'Full Stack',
      frontend: 'Frontend',
      backend: 'Backend',
    },
    items: {
      'project-1': {
        description: 'A real-time developer dashboard that aggregates GitHub activity, CI/CD status, and deployment metrics in one beautiful interface.',
      },
      'project-2': {
        description: 'An in-browser pixel art editor with layer support, animation timeline, and one-click export to GIF/PNG formats.',
      },
      'project-3': {
        description: 'A minimalist note-taking app with markdown support, tag-based organization, and local-first sync via IndexedDB.',
      },
      'project-4': {
        description: 'A lightweight REST API mock server with request recording, response templating, and team sharing via JSON exports.',
      },
      'project-5': {
        description: 'A collection of reusable Vue 3 chart components built on top of D3.js, supporting 12+ chart types with dark mode.',
      },
      'project-6': {
        description: 'A team task management API built with Python and Flask, featuring JWT auth, WebSocket notifications, and role-based permissions.',
      },
    },
  },
  experience: {
    title: 'Experience',
    subtitle: 'My professional journey and educational background.',
    items: {
      'exp-1': {
        description: [
          'Led the migration of a legacy jQuery application to Vue 3, reducing bundle size by 40% and improving Lighthouse scores from 62 to 94.',
          'Designed and implemented a real-time dashboard feature serving 10,000+ daily active users.',
          'Mentored 3 junior developers and established frontend code review standards.',
        ],
      },
      'exp-2': {
        description: [
          'Built and shipped 4 SaaS products from zero to production, handling both frontend (Vue) and backend (Flask/Node.js) development.',
          'Designed a microservices architecture using Docker and GitHub Actions, cutting deployment time by 60%.',
          'Integrated Stripe payment processing and third-party OAuth for Google/GitHub login.',
        ],
      },
      'exp-3': {
        description: [
          'Delivered 8 client projects including e-commerce stores, landing pages, and admin dashboards.',
          'Specialized in performance optimization — all projects achieved 90+ Lighthouse scores.',
        ],
      },
      'edu-1': {
        description: [
          'Graduated with First Class Honours. Thesis: "Performance Optimization Techniques for Single-Page Applications."',
          'President of the Web Development Club, organized 12 workshops for 200+ students.',
        ],
      },
    },
  },
  contact: {
    title: 'Get In Touch',
    subtitle: "Have a project in mind? I'd love to hear from you.",
    info_text: "I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a friendly conversation about tech. My inbox is always open!",
    email_label: 'Email',
    location_label: 'Location',
    find_me_on: 'Find me on',
    form: {
      title: 'Send a Message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      name_placeholder: 'John Doe',
      email_placeholder: 'john@example.com',
      message_placeholder: 'Tell me about your project...',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: "Message sent! I'll get back to you soon.",
      error: 'Something went wrong. Please try emailing directly.',
      err_name: 'Name is required.',
      err_email: 'A valid email is required.',
      err_message: 'Message must be at least 10 characters.',
    },
  },
  footer: {
    built_with: 'Built with Vue 3, UnoCSS &',
  },
}
