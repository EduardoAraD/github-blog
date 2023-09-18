import { ReactSVG } from 'react-svg'

import { useUserIsses } from '../../hooks/useUserIsses'

import { ListInfoCard } from '../ListInfoCard'

import { CardProfileContainer } from './styles'
import arrowSquareOut from '../../assets/arrow-up-right-square.svg'

export function CardProfile() {
  const { user } = useUserIsses()

  return (
    <CardProfileContainer>
      <img className="card-profile" src={user.avatar_url} alt="" />
      <div className="card-info">
        <div className="card-name">
          <span>{user.name}</span>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            GITHUB
            <ReactSVG src={arrowSquareOut} />
          </a>
        </div>
        <p>{user.bio}</p>
        <ListInfoCard
          nameUser={user.login}
          company={user.company}
          follow={user.following}
        />
      </div>
    </CardProfileContainer>
  )
}
