import styled from 'styled-components'
import {
  Button
} from 'arwes'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 600px;
  padding: 24px;
  margin: 0 auto;
  box-sizing: border-box;
`

export const CodeWrapper = styled.div`
  width: 600px;
  margin: 20px auto 0;

  animation: spread 1000ms ease;
`

export const Submit = styled(Button)`
  display: block;
  width: 120px;
  margin: 20px auto;
`