import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: white;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  position: absolute;
  bottom: 1em;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

export default Button;
