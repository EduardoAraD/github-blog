import { useNavigate } from 'react-router-dom'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useUserIsses } from '../../hooks/useUserIsses'

import { CardPostContainer } from './styles'

interface CardPostProps {
  title: string
  body: string
  createdAt: Date
  urlPost: string
}

export function CardPost({ title, body, createdAt, urlPost }: CardPostProps) {
  const navigate = useNavigate()
  const { createIsseUrl } = useUserIsses()

  const publishedDateFormatted = format(
    createdAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )
  const publishedDateRelativeNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleToPost() {
    createIsseUrl(urlPost)
    const titleUrlNavigation = title.toLocaleLowerCase().split(' ').join('_')

    navigate(`/${titleUrlNavigation}`)
  }

  return (
    <CardPostContainer type="button" onClick={handleToPost}>
      <div>
        <span>{title}</span>
        <time title={publishedDateFormatted} dateTime={createdAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </div>
      <p>{body}</p>
    </CardPostContainer>
  )
}
