import { FunctionComponent, ReactElement, SVGProps } from "react"

export type Link = {
  text: string
  url: string
}

export type Role = {
  company: string
  link: string
  logo: FunctionComponent<SVGProps<SVGSVGElement>> | string
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
