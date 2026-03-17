export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: string
  image?: string
  github?: string
  demo?: string
  featured?: boolean
}

export interface Skill {
  name: string
  level: number // 0-100
  category: 'backend' | 'database' | 'ai' | 'devops' | 'frontend'
  icon?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  startDate: string
  endDate?: string
  description: string[]
  tags: string[]
  type: 'work' | 'education'
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  color?: string
}

export interface Profile {
  name: string
  taglines: string[]
  bio: string
  location: string
  email: string
  avatar: string
  stats: { label: string; value: string }[]
}
