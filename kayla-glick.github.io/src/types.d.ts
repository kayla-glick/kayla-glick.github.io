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
  link: string
  name: string
  image: string
  description: string
  skills: string[]
}
