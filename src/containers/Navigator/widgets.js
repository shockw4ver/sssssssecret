import React from 'react'
import styled from 'styled-components'
import { List, Link } from 'arwes'
import {
  Colors
} from '../../libs/style-presets'

export {
  Logo,
  Words,
  Button,
  Highlight,
} from 'arwes'

export const NavList = styled(List).attrs({
  node: 'ul'
})`
  margin-left: 0!important;
`

export const LogoWrapper = styled.div`
  width: 100%;
  height: 80px;
`

export const NavListItem = styled.div`
  position: relative;
  padding: 20px;
  text-indent: 20px;
  cursor: pointer;

  .indicator {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: ${Colors.Primary};
    transform-origin: center center;

    animation: stretch 300ms ease;
  }
`

export const NavListItemLabel = styled(Link)`
  text-indent: 20px;
`
