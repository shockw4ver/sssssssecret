import React, { useState } from 'react'
import { Button, Words } from 'arwes'
import styled from 'styled-components'
import { getRune } from '../utils/rune'
import { Modal } from './modal'

const Wrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  margin: auto;
  width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TypeBox = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
`

const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  opacity: 0;
`

const Output = styled(Words)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: inline-block;
  text-align: center;
  font-size: 30px;
  width: 100%;
`

const Submit = styled(Button)`
  height: 40px;
  width: 100px;
`

export function Entry({
  onPass
}) {
  const [code, setCode] = useState('')
  const [result, setResult] = useState('')

  function handleChange(ev) {
    setCode(ev.target.value)
  }

  function handleSubmit() {
    if (code.toUpperCase() === 'TEQUILASUNRISE') {
      setResult('ok')
      setTimeout(() => {
        onPass()
      }, 3000)
    } else {
      setResult('bad')
    }
  }
  
  function handleClose() {
    setResult('')
  }

  return (
    <Wrapper>
      <TypeBox>
        <Input onChange={handleChange} />
        <Output layer="success">
          { getRune(code) }
        </Output>
      </TypeBox>
      <Submit animate layer="success" onClick={handleSubmit}>
        <i className="mdi mdi-chemical-weapon" /> enter
      </Submit>

      {result && (
        <Modal type={result === 'ok' ? 'success' : 'alert'} onClose={handleClose}>
          <Words animate layer={result === 'ok' ? 'success' : 'alert'}>
            {result === 'ok' ? 'Checked, General!' : 'InAccessible!'}
          </Words>
        </Modal>
      )}
    </Wrapper>
  )
}