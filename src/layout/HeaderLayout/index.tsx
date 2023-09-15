import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function HeaderLayout() {
  return (
    <LayoutContainer>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </LayoutContainer>
  )
}
