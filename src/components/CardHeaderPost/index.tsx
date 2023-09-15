import { NavLink } from 'react-router-dom'
import { ListInfoCard } from '../ListInfoCard'

import { CardHeaderPostContainer } from './styles'
import { CaretLeft } from 'phosphor-react'
import { ReactSVG } from 'react-svg'

import arrowSquareOut from '../../assets/arrow-up-right-square.svg'

export function CardHeaderPost() {
  return (
    <CardHeaderPostContainer>
      <div className="card-options">
        <NavLink to="/">
          <CaretLeft weight="bold" />
          VOLTAR
        </NavLink>
        <a href="https://github.com/EduardoArad">
          VER NO GITHUB
          <ReactSVG src={arrowSquareOut} />
        </a>
      </div>
      <p>JavaScript data types and data structures</p>
      <ListInfoCard />
    </CardHeaderPostContainer>
  )
}
