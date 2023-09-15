import { ReactSVG } from 'react-svg'

import { ListInfoCard } from '../ListInfoCard'

import { CardProfileContainer } from './styles'
import arrowSquareOut from '../../assets/arrow-up-right-square.svg'

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
        <ListInfoCard />
      </div>
    </CardProfileContainer>
  )
}
