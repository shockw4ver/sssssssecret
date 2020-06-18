import React, { useState } from "react";
import "./styles.css";
import { createTheme, ThemeProvider, Arwes } from "arwes";

import { Uploader } from "./components/uploader";
import { Entry } from './components/entry';

export default function App() {
  const [authed, setAuthStatus] = useState(false)

  function handlePass() {
    setAuthStatus(true)
  }

  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes className="App">
        {authed ? (
          <Uploader />
        ) : (
          <Entry onPass={handlePass} />
        )}
      </Arwes>
    </ThemeProvider>
  );
}
