import type { Profile } from '@/types'

export const profile: Profile = {
  name: 'Xue Yi-Zhan',
  taglines: [
    'Backend Engineer',
    'Python Developer',
    'Data-Driven Backend Engineer',
    'AI & ML Enthusiast',
  ],
  bio: `I am a Data-Driven Backend Engineer with a strong background in Python, AI, and data analysis.
  I specialize in building scalable RESTful APIs, designing robust data models, and integrating
  machine learning pipelines into production systems. Passionate about clean architecture and
  turning raw data into actionable insights.`,
  location: 'Taiwan, Taichung',
  email: 'n16418113@gmail.com',
  // Place your photo at public/images/avatar.jpg to use your own image
  avatar: '/images/avatar.jpg',
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '18+' },
    { label: 'GitHub Repos', value: '30+' },
  ],
}
