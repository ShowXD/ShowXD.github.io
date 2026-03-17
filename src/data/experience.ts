import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'TechVenture Inc.',
    role: 'Senior Frontend Developer',
    period: 'Jan 2024 – Present',
    startDate: '2024-01',
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
    tags: ['Algorithms', 'Data Structures', 'Database Systems', 'Computer Networks'],
    type: 'education',
  },
]
