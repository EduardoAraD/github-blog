import { Route, Routes } from 'react-router-dom'

import { HeaderLayout } from '../layout/HeaderLayout'

import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
