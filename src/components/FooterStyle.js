import styled from 'styled-components';

const Footer = styled.div`
  @media (min-width: 512px) {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 1em;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #e45e13 0%,
      #292a2d 25%,
      #647d1c 50%,
      #292a2d 75%,
      #e8aa25 100%
    );
    background-size: cover;
  }
`;

export default Footer;
