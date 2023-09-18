import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { getIssesGithub, getUserGithub } from '../lib/github'

import { User } from '../Model/User'
import { Isses } from '../Model/Isses'

interface UserIssesContextProps {
  user: User
  isses: Isses[]
  isseUrlActive: string
  createIsseUrl: (url: string) => void
  searchIsses: (search: string) => void
}

interface UserIssesProviderProps {
  children: ReactNode
}

export const UserIssesContext = createContext<UserIssesContextProps>(
  {} as UserIssesContextProps,
)

export function UserIssesProvider({ children }: UserIssesProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [isses, setIsses] = useState<Isses[]>([])
  const [isseUrlActive, setIsseUrlActive] = useState('')

  const loadUserGithub = useCallback(async () => {
    const userResp = await getUserGithub()

    setUser(userResp)

    // const issesResp = await getIssesGithub({ search: '' })
    // setIsses(issesResp)
  }, [])

  function createIsseUrl(url: string) {
    setIsseUrlActive(url)
  }

  async function searchIsses(search: string) {
    const issesResp = await getIssesGithub({ search })
    setIsses(issesResp)
  }

  useEffect(() => {
    loadUserGithub()
  }, [loadUserGithub])

  return (
    <UserIssesContext.Provider
      value={{
        user,
        isses,
        isseUrlActive,
        createIsseUrl,
        searchIsses,
      }}
    >
      {children}
    </UserIssesContext.Provider>
  )
}
