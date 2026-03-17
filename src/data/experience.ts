import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'TechVenture Inc.',
    role: 'Senior Frontend Developer',
    period: 'Jan 2024 – Present',
    startDate: '2024-01',
    description: [
      'Led the migration of a legacy jQuery application to Vue 3, reducing bundle size by 40% and improving Lighthouse scores from 62 to 94.',
      'Designed and implemented a real-time dashboard feature serving 10,000+ daily active users.',
      'Mentored 3 junior developers and established frontend code review standards.',
    ],
    tags: ['Vue 3', 'TypeScript', 'WebSocket', 'TailwindCSS'],
    type: 'work',
  },
  {
    id: 'exp-2',
    company: 'StartupLabs',
    role: 'Full Stack Developer',
    period: 'Jun 2022 – Dec 2023',
    startDate: '2022-06',
    endDate: '2023-12',
    description: [
      'Built and shipped 4 SaaS products from zero to production, handling both frontend (Vue) and backend (Flask/Node.js) development.',
      'Designed a microservices architecture using Docker and GitHub Actions, cutting deployment time by 60%.',
      'Integrated Stripe payment processing and third-party OAuth for Google/GitHub login.',
    ],
    tags: ['Vue 3', 'Flask', 'Docker', 'PostgreSQL', 'Stripe'],
    type: 'work',
  },
  {
    id: 'exp-3',
    company: 'Freelance',
    role: 'Frontend Developer',
    period: 'Sep 2021 – May 2022',
    startDate: '2021-09',
    endDate: '2022-05',
    description: [
      'Delivered 8 client projects including e-commerce stores, landing pages, and admin dashboards.',
      'Specialized in performance optimization — all projects achieved 90+ Lighthouse scores.',
    ],
    tags: ['Vue 2/3', 'React', 'Nuxt.js', 'GSAP'],
    type: 'work',
  },
  {
    id: 'edu-1',
    company: 'National Taiwan University',
    role: 'B.S. Computer Science',
    period: '2017 – 2021',
    startDate: '2017-09',
    endDate: '2021-06',
    description: [
      'Graduated with First Class Honours. Thesis: "Performance Optimization Techniques for Single-Page Applications."',
      'President of the Web Development Club, organized 12 workshops for 200+ students.',
    ],
    tags: ['Algorithms', 'Data Structures', 'Database Systems', 'Computer Networks'],
    type: 'education',
  },
]
