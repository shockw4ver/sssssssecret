import React from 'react'
import styled from 'styled-components'
import {
  Col,
  Row
} from 'arwes'

export const AppWrapper = styled(Row).attrs({
  noGutter: true
})`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const Sidebar = styled(Col).attrs({
  s: 0, m: 3, l: 2,
  noGutter: true
})`
  height: 100%;
  transition: all 300ms;

  &:hover {
    background-color: rgba(255,255,255,.1);
  }
`

export const Main = styled(Col).attrs({
  s: 0, m: 9, l: 10
})`
  height: 100%;
`