import styled from 'styled-components';

const StyledHatch = styled.div`
  padding-top: 100%;
  position: relative;
  cursor: pointer;

  .front {
    background: ${(props) => props.frontColor};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    backface-visibility: hidden;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Pilat Narrow';
      color: black;
      padding: 20px;
      width: 50%;
      height: 50%;
      font-weight: 700;
      font-size: 2rem;
    }

    &.open {
    }
  }
  .back {
    position: absolute;
    background: center / cover url(${(props) => props.hatchBackdrop});
    top: 0px;
    left: 0px;
    z-index: 1;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    &.open {
      z-index: 2;
      backface-visibility: hidden;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export default StyledHatch;
