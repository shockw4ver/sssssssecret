import React from 'react'
import {
  useHistory,
  useLocation,
} from 'react-router-dom'
import styled from 'styled-components'
import {
  Words,
  NavList,
  Highlight,
  LogoWrapper,
  NavListItem,
  NavListItemLabel,
} from './widgets'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const links = [
  { label: 'UPLOADER', path: '/uploader' },
  { label: 'NGINX', path: '/nginx' }
]

export function Navigator() {
  const history = useHistory()
  const location = useLocation()

  function handleLink(path) {
    history.push(path)
  }

  return (
    <Wrapper>
      <LogoWrapper />
      <NavList>
        {links.map(link => (
          <Highlight key={link.label}>
            <NavListItem
              animate
              onClick={() => handleLink(link.path)}
            >
              {location.pathname === link.path && (
                <div className="indicator" />
              )}
              <NavListItemLabel>{ link.label }</NavListItemLabel>
            </NavListItem>
          </Highlight>
        ))}
      </NavList>
    </Wrapper>
  )
}