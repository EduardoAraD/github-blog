import { ChangeEvent, Fragment, useEffect, useState } from 'react'

import { useUserIsses } from '../../hooks/useUserIsses'

import { CardPost } from '../../components/CardPost'
import { CardProfile } from '../../components/CardProfile'

import { HomeInfo, Input, ListPost } from './styles'

export function Home() {
  const { isses, searchIsses } = useUserIsses()

  const [search, setSearch] = useState('')

  function handleSetSearch({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setSearch(value)
  }

  const numberAllPosts = isses.length

  useEffect(() => {
    searchIsses(search)
  }, [search, searchIsses])

  return (
    <Fragment>
      <CardProfile />
      <HomeInfo>
        <p>Publicações</p>
        <span>{numberAllPosts} publicações</span>
      </HomeInfo>
      <Input
        placeholder="Buscar conteúdo"
        value={search}
        onChange={handleSetSearch}
      />
      <ListPost>
        {isses.map((isse) => (
          <CardPost
            key={isse.id}
            title={isse.title}
            body={isse.body}
            createdAt={new Date(isse.created_at)}
            urlPost={isse.url}
          />
        ))}
      </ListPost>
    </Fragment>
  )
}
