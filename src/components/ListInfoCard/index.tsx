import { ReactSVG } from 'react-svg'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { ListInfoCardContainer } from './styles'
import building from '../../assets/building.svg'
import githubLogo from '../../assets/github.svg'
import usersGroupSvg from '../../assets/user-group.svg'
import commentSvg from '../../assets/comment.svg'
import calendarSvg from '../../assets/calendar.svg'

interface ListinfoCardProps {
  nameUser: string
  company?: string | null
  follow?: number
  createdAt?: Date
  comments?: number
}

export function ListInfoCard({
  nameUser,
  createdAt,
  comments,
  company,
  follow,
}: ListinfoCardProps) {
  const publishedDateFormatted = format(
    createdAt || new Date(),
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )
  const publishedDateRelativeNow = formatDistanceToNow(
    createdAt || new Date(),
    {
      locale: ptBR,
      addSuffix: true,
    },
  )

  return (
    <ListInfoCardContainer>
      <div>
        <ReactSVG src={githubLogo} />
        <span>{nameUser}</span>
      </div>
      {company && (
        <div>
          <ReactSVG src={building} />
          <span>{company}</span>
        </div>
      )}
      {follow && (
        <div>
          <ReactSVG src={usersGroupSvg} />
          <span>{follow} seguidores</span>
        </div>
      )}
      {createdAt && (
        <div>
          <ReactSVG src={calendarSvg} />
          <time
            title={publishedDateFormatted}
            dateTime={createdAt.toISOString()}
          >
            {publishedDateRelativeNow}
          </time>
        </div>
      )}
      {comments && (
        <div>
          <ReactSVG src={commentSvg} />
          <span>{comments} comentários</span>
        </div>
      )}
    </ListInfoCardContainer>
  )
}
