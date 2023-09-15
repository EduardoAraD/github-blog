import { ReactSVG } from 'react-svg'

import building from '../../assets/building.svg'
import githubLogo from '../../assets/github.svg'
import usersGroupSvg from '../../assets/user-group.svg'
import { ListInfoCardContainer } from './styles'

export function ListInfoCard() {
  return (
    <ListInfoCardContainer>
      <div>
        <ReactSVG src={githubLogo} />
        <span>camaronwill</span>
      </div>
      <div>
        <ReactSVG src={building} />
        <span>Rocketseat</span>
      </div>
      <div>
        <ReactSVG src={usersGroupSvg} />
        <span>32 seguidores</span>
      </div>
    </ListInfoCardContainer>
  )
}
