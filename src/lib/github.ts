import axios from 'axios'

import { Isses, IssesComplete } from '../Model/Isses'
import { User } from '../Model/User'

import { api } from './api'

export async function getUserGithub() {
  const username = 'EduardoAraD'
  const response: User = await api.get(`/users/${username}`).then((resp) => {
    const obj: User = {
      company: resp.data.company,
      avatar_url: resp.data.avatar_url,
      following: resp.data.following,
      bio: resp.data.bio,
      id: resp.data.id,
      login: resp.data.login,
      name: resp.data.name,
      url: resp.data.url,
      html_url: resp.data.html_url,
    }

    return obj
  })

  return response
}

export async function getIssesGithub({
  repo = 'github-blog',
  search,
  username = 'EduardoAraD',
}: {
  search: string
  username?: string
  repo?: string
}) {
  const response = await api.get(
    `/search/issues?q=${search}%20repo:${username}/${repo}`,
  )

  const list: Isses[] = response.data.items

  return list
}

export async function getIssesComplete(url: string) {
  const response = await axios.get(url)

  const isses: IssesComplete = response.data

  return isses
}
