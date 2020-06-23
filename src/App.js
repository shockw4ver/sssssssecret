import React, { useState } from "react"
import "./styles.css"
import { createTheme, ThemeProvider, Arwes } from "arwes"

import AppRouter from './router'
import { Entry } from './components/entry'

export default function App() {
  const [authed, setAuthStatus] = useState(true)

  function handlePass() {
    setAuthStatus(true)
  }

  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes className="App">
        {authed ? (
          <>
            <AppRouter />
          </>
        ) : (
          <Entry onPass={handlePass} />
        )}
      </Arwes>
    </ThemeProvider>
  )
}
