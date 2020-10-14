import { createGlobalStyle } from 'styled-components';
import PilatNarrowBlack from '../fonts/PilatNarrow-Black.woff';
import BEYNO from '../fonts/BEYNO.woff';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'BEYNO';
    src: url(${BEYNO}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
    @font-face {
        font-family: 'Pilat Narrow';
        src: url(${PilatNarrowBlack}) format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
`;

export default GlobalStyle;
