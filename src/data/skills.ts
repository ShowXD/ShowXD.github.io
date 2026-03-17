import type { Skill } from '@/types'

export const skills: Skill[] = [
  // Frontend
  { name: 'Vue 3', level: 90, category: 'frontend', icon: 'i-simple-icons-vuedotjs' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: 'i-simple-icons-typescript' },
  { name: 'React', level: 75, category: 'frontend', icon: 'i-simple-icons-react' },
  { name: 'CSS / TailwindCSS', level: 88, category: 'frontend', icon: 'i-simple-icons-tailwindcss' },
  { name: 'Vite', level: 82, category: 'frontend', icon: 'i-simple-icons-vite' },
  { name: 'Three.js', level: 65, category: 'frontend', icon: 'i-simple-icons-threedotjs' },
  // Backend
  { name: 'Node.js', level: 80, category: 'backend', icon: 'i-simple-icons-nodedotjs' },
  { name: 'Python', level: 78, category: 'backend', icon: 'i-simple-icons-python' },
  { name: 'Flask', level: 72, category: 'backend', icon: 'i-simple-icons-flask' },
  { name: 'PostgreSQL', level: 75, category: 'backend', icon: 'i-simple-icons-postgresql' },
  { name: 'Redis', level: 65, category: 'backend', icon: 'i-simple-icons-redis' },
  // Tools
  { name: 'Git / GitHub', level: 90, category: 'tools', icon: 'i-simple-icons-github' },
  { name: 'Docker', level: 70, category: 'tools', icon: 'i-simple-icons-docker' },
  { name: 'GitHub Actions', level: 75, category: 'tools', icon: 'i-simple-icons-githubactions' },
  { name: 'Figma', level: 68, category: 'tools', icon: 'i-simple-icons-figma' },
]

export const skillCategories = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools' },
] as const
