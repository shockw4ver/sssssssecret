import React from "react";
import { Frame } from "arwes";
import styled from "styled-components";

const Curtain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
  animation: spread 1000ms ease;
  animation-delay: 1000ms;

  @keyframes spread {
    from {
      height: 0;
    }
    to {
      height: 500px;
    }
  }
`;

export function Modal() {
  return (
    <Curtain>
      <Wrapper>
        <Frame show={true} animate={true} level={3} corners={4} layer="primary">
          <h2>Ok</h2>
          <p>Now I know you were so dirty...</p>
          <p>Wubba lubba dub dub</p>
        </Frame>
      </Wrapper>
    </Curtain>
  );
}
