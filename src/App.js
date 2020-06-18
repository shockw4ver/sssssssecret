import React from "react";
import "./styles.css";
import { createTheme, ThemeProvider, Arwes } from "arwes";

import { Uploader } from "./components/uploader";

export default function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes className="App">
        <Uploader />
      </Arwes>
    </ThemeProvider>
  );
}
