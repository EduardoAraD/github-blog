import { HeaderContainer } from './styles'
import effectLeft from '../../assets/effectLeft.svg'
import effectRight from '../../assets/effectRight.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectLeft} alt="" />
      <img className="logo" src={logo} alt="" />
      <img src={effectRight} alt="" />
    </HeaderContainer>
  )
}
