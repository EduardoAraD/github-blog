import { NavLink } from 'react-router-dom'
import { CaretLeft } from 'phosphor-react'
import { ReactSVG } from 'react-svg'

import { ListInfoCard } from '../ListInfoCard'

import { CardHeaderPostContainer } from './styles'
import arrowSquareOut from '../../assets/arrow-up-right-square.svg'

interface CardHeaderPostProps {
  title: string
  urlGithub: string
  nameUser: string
  createdAt: Date
  comments: number
}

export function CardHeaderPost({
  nameUser,
  comments,
  createdAt,
  title,
  urlGithub,
}: CardHeaderPostProps) {
  return (
    <CardHeaderPostContainer>
      <div className="card-options">
        <NavLink to="/">
          <CaretLeft weight="bold" />
          VOLTAR
        </NavLink>
        <a href={urlGithub} target="_blank" rel="noreferrer">
          VER NO GITHUB
          <ReactSVG src={arrowSquareOut} />
        </a>
      </div>
      <p>{title}</p>
      <ListInfoCard
        nameUser={nameUser}
        createdAt={createdAt}
        comments={comments}
      />
    </CardHeaderPostContainer>
  )
}
