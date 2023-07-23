export type Link = {
  text: string
  url: string
}

export type Role = {
  company: string
  link: string
  logo: string
  name: string
  previousRoles?: string[]
  dates: string
  description: string
  skills: string[]
  projects?: Link[]
}

export type Project = {
  link?: string
  name: string
  images: string[]
  description: string
  skills: string[]
}
