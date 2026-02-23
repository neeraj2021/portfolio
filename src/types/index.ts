export type NavSection =
  | 'hero'
  | 'impact'
  | 'experience'
  | 'stack'
  | 'philosophy'
  | 'education'
  | 'leadership'
  | 'contact'

export type Stat = {
  label: string
  value: number
  suffix?: string
}

export type TimelineEntry = {
  side: 'left' | 'right'
  title: string
  subtitle?: string
  period?: string
  location?: string
  bullets: string[]
}

export type TechStackCategory = {
  title: string
  items: string
}

export type Theme = 'dark' | 'light'
