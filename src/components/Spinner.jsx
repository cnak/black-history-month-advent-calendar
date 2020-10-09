import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 2s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #e55f13;
  border-right: 2px solid #647d1c;
  border-bottom: 2px solid #e8aa24;
  border-left: 4px solid #e55f13;

  background: transparent;

  width: 12vh;
  height: 12vh;
  margin: 0 auto;
  border-radius: 50%;
`;

export default Spinner;
