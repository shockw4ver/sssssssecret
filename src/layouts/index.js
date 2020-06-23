import React from 'react'
import {
  Grid
} from 'arwes'
import {
  AppWrapper,
  Sidebar,
  Main
} from './blocks'
import { Navigator } from '../containers/Navigator'

export function BasicLayout({ children }) {
  return (
    <AppWrapper>
      <Sidebar>
        <Navigator />
      </Sidebar>
      <Main>
        { children }
      </Main>
    </AppWrapper>
  )
}