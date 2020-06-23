import React, { useState } from "react";
import { Frame } from "arwes";
import styled from "styled-components";

const Curtain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,.3);
`;

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
  margin: auto;
  height: 200px;
  width: 500px;
  animation: ${props => props.spread ? 'spread 1000ms ease' : 'collapsed 800ms ease'}; /* in src/styles.css */
`;

export function Modal({
  children,
  type = 'success',
  onClose = () => {}
}) {
  const [spread, setSpread] = useState(true)

  function handleCurtainClick() {
    setSpread(false)
  }

  function handleTransEnd() {
    if (!spread) {
      onClose()
    }
  }

  return (
    <Curtain onClick={handleCurtainClick}>
      <Wrapper spread={spread} onTransitionEnd={handleTransEnd}>
        <Frame show={spread} animate={true} level={3} corners={4} layer={type}>
          { children }
        </Frame>
      </Wrapper>
    </Curtain>
  );
}
