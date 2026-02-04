export interface ProfileSocials {
  github: string
  linkedin: string
  medium?: string
}

export interface Profile {
  name: string
  role: string
  location: string
  email: string
  phone?: string
  birthday?: string
  /** Profile image URL; if absent, placeholder space is shown. */
  avatar?: string
  /** Short one-liner for the hero; full bio stays in summary for About. */
  heroIntro?: string
  summary: string
  socials: ProfileSocials
}

export interface SkillsData {
  frontend: string[]
  backend: string[]
  databases: string[]
  tools: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  duration: string
  description: string[]
  tech: string[]
}

export type ExperienceData = ExperienceEntry[]

export interface ProjectEntry {
  title: string
  description: string
  highlights: string[]
  tech: string[]
  url?: string
}

export type ProjectsData = ProjectEntry[]

export interface BlogEntry {
  title: string
  platform: string
  link: string
  /** ISO date string from feed */
  pubDate?: string
  /** Plain or HTML excerpt; component may strip tags and truncate */
  description?: string
  thumbnail?: string
}

export type BlogsData = BlogEntry[]

export interface ContactData {
  sectionTitle: string
  message: string
}

export interface SectionTitles {
  about: string
  skills: string
  experience: string
  projects: string
  blogs: string
  contact: string
}

export type SkillsCategoryLabels = Record<keyof SkillsData, string>
