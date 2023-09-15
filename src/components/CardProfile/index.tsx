import { ReactSVG } from 'react-svg'

import { CardProfileContainer } from './styles'
import building from '../../assets/building.svg'
import githubLogo from '../../assets/github.svg'
import arrowSquareOut from '../../assets/arrow-up-right-square.svg'
import usersGroupSvg from '../../assets/user-group.svg'

export function CardProfile() {
  return (
    <CardProfileContainer>
      <img
        className="card-profile"
        src="https://github.com/EduardoArad.png"
        alt=""
      />
      <div className="card-info">
        <div className="card-name">
          <span>Eduardo Araáuj</span>
          <a href="https://github.com/EduardoArad">
            GITHUB
            <ReactSVG src={arrowSquareOut} />
          </a>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="card-list">
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
        </div>
      </div>
    </CardProfileContainer>
  )
}
