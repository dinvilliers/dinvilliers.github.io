import styled, { css } from "styled-components"

/* 
changed cursor from fixed to absolute to fix problem with it not 
working properly on scroll
*/

export const Cursor = styled.div`
@media only screen {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 42px;
  height: 42px;
  border: 3px solid #ea281e;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

}
`
