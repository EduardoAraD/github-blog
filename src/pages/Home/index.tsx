import { ChangeEvent, Fragment, useState } from 'react'

import { CardPost } from '../../components/CardPost'
import { CardProfile } from '../../components/CardProfile'

import { HomeInfo, Input, ListPost } from './styles'

export function Home() {
  const [search, setSearch] = useState('')

  function handleSetSearch({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setSearch(value)
  }

  return (
    <Fragment>
      <CardProfile />
      <HomeInfo>
        <p>Publicações</p>
        <span>6 publicações</span>
      </HomeInfo>
      <Input
        placeholder="Buscar conteúdo"
        value={search}
        onChange={handleSetSearch}
      />
      <ListPost>
        <CardPost />
        <CardPost />
        <CardPost />
      </ListPost>
    </Fragment>
  )
}
