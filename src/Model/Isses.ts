export interface Isses {
  id: number
  url: string
  title: string
  created_at: string
  body: string
}

export interface IssesComplete extends Isses {
  url: string
  html_url: string
  title: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  body: string
}

export const issesCompleteEmpty: IssesComplete = {
  body: '',
  comments: 0,
  created_at: '',
  html_url: '',
  id: 1,
  title: 'Carregando ...',
  url: '',
  user: {
    login: '',
  },
}
