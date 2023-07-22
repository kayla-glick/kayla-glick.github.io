type Link = {
  text: string
  url: string
}

type Role = {
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

type Project = {
  link?: string
  name: string
  images: string[]
  description: string
  skills: string[]
}
