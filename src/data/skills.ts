import type { Skill } from '@/types'

export const skills: Skill[] = [
  // Backend
  { name: 'Python', level: 90, category: 'backend', icon: 'i-simple-icons-python' },
  { name: 'Django', level: 85, category: 'backend', icon: 'i-simple-icons-django' },
  { name: '.NET (C#)', level: 80, category: 'backend', icon: 'i-simple-icons-dotnet' },
  { name: 'RESTful API', level: 88, category: 'backend', icon: 'i-mdi-api' },
  { name: 'System Design', level: 75, category: 'backend', icon: 'i-mdi-sitemap-outline' },
  // Database
  { name: 'SQL Server', level: 88, category: 'database', icon: 'i-simple-icons-microsoftsqlserver' },
  { name: 'Data Modeling', level: 82, category: 'database', icon: 'i-mdi-database-outline' },
  { name: 'Query Optimization', level: 80, category: 'database', icon: 'i-mdi-database-search-outline' },
  { name: 'ETL / Data Processing', level: 78, category: 'database', icon: 'i-mdi-transfer' },
  // AI / ML
  { name: 'Machine Learning', level: 82, category: 'ai', icon: 'i-mdi-brain' },
  { name: 'Deep Learning', level: 78, category: 'ai', icon: 'i-mdi-chart-neural-network' },
  { name: 'TensorFlow', level: 75, category: 'ai', icon: 'i-simple-icons-tensorflow' },
  { name: 'PyTorch', level: 75, category: 'ai', icon: 'i-simple-icons-pytorch' },
  // DevOps / Tools
  { name: 'Docker', level: 80, category: 'devops', icon: 'i-simple-icons-docker' },
  { name: 'Git / GitHub', level: 90, category: 'devops', icon: 'i-simple-icons-github' },
  { name: 'Linux', level: 75, category: 'devops', icon: 'i-simple-icons-linux' },
  // Frontend
  { name: 'Vue.js', level: 75, category: 'frontend', icon: 'i-simple-icons-vuedotjs' },
  { name: 'JavaScript', level: 70, category: 'frontend', icon: 'i-simple-icons-javascript' },
]

export const skillCategories = [
  { key: 'all', label: 'All' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'devops', label: 'DevOps' },
  { key: 'frontend', label: 'Frontend' },
] as const
