import { describe, it, expect } from 'vitest'
import { profile } from '@/data/profile'
import { skills } from '@/data/skills'
import { projects } from '@/data/projects'
import { experiences } from '@/data/experience'
import { socialLinks } from '@/data/social'

describe('Profile data', () => {
  it('has required fields', () => {
    expect(profile.name).toBeTruthy()
    expect(profile.taglines.length).toBeGreaterThan(0)
    expect(profile.bio).toBeTruthy()
    expect(profile.email).toMatch(/@/)
    expect(profile.stats.length).toBeGreaterThan(0)
  })
})

describe('Skills data', () => {
  it('has valid skill levels', () => {
    skills.forEach((skill) => {
      expect(skill.level).toBeGreaterThanOrEqual(0)
      expect(skill.level).toBeLessThanOrEqual(100)
      expect(['frontend', 'backend', 'tools', 'other']).toContain(skill.category)
    })
  })

  it('has at least 5 skills', () => {
    expect(skills.length).toBeGreaterThanOrEqual(5)
  })
})

describe('Projects data', () => {
  it('has required fields on each project', () => {
    projects.forEach((project) => {
      expect(project.id).toBeTruthy()
      expect(project.title).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.tags.length).toBeGreaterThan(0)
      expect(project.category).toBeTruthy()
    })
  })

  it('has at least 3 projects', () => {
    expect(projects.length).toBeGreaterThanOrEqual(3)
  })
})

describe('Experience data', () => {
  it('has required fields on each experience', () => {
    experiences.forEach((exp) => {
      expect(exp.id).toBeTruthy()
      expect(exp.company).toBeTruthy()
      expect(exp.role).toBeTruthy()
      expect(exp.description.length).toBeGreaterThan(0)
      expect(['work', 'education']).toContain(exp.type)
    })
  })
})

describe('Social links', () => {
  it('has valid social links', () => {
    socialLinks.forEach((link) => {
      expect(link.name).toBeTruthy()
      expect(link.url).toBeTruthy()
      expect(link.icon).toBeTruthy()
    })
  })
})
