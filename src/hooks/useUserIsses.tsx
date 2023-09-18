import { useContext } from 'react'

import { UserIssesContext } from '../contexts/UserIssesContext'

export function useUserIsses() {
  return useContext(UserIssesContext)
}
