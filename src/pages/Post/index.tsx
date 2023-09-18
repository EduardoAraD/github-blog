import { Fragment, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { useUserIsses } from '../../hooks/useUserIsses'

import { IssesComplete, issesCompleteEmpty } from '../../Model/Isses'

import { CardHeaderPost } from '../../components/CardHeaderPost'

import { getIssesComplete } from '../../lib/github'

import { PostContainer } from './styles'

export function Post() {
  const navigate = useNavigate()
  const { isseUrlActive } = useUserIsses()
  const [postComplete, setPostComplete] =
    useState<IssesComplete>(issesCompleteEmpty)

  const loadPost = useCallback(async () => {
    if (isseUrlActive !== '') {
      const isseComp = await getIssesComplete(isseUrlActive)
      setPostComplete(isseComp)
    } else {
      navigate('')
    }
  }, [isseUrlActive, navigate])

  useEffect(() => {
    loadPost()
  }, [loadPost])

  const createdAtDate =
    postComplete.created_at !== ''
      ? new Date(postComplete.created_at)
      : new Date()

  return (
    <Fragment>
      <CardHeaderPost
        comments={postComplete.comments}
        createdAt={createdAtDate}
        nameUser={postComplete.user.login}
        title={postComplete.title}
        urlGithub={postComplete.html_url}
      />
      {postComplete.body && (
        <PostContainer>
          <ReactMarkdown>{postComplete.body}</ReactMarkdown>
        </PostContainer>
      )}
    </Fragment>
  )
}
