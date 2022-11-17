import { createGlobalStyle } from 'styled-components';
import {
    COLORS,
    WEIGHTS,
    TYPE_SCALE,
    FAMILIES
} from '../../constants/themes';

const GlobalStyles = createGlobalStyle`
    html, body, div, span, small, cite,
    ol, ul, li, img, a, label, strong,
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    *,
    *:before
    *:after {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        color: ${COLORS.gray[800]};
        font-style: normal;
        font-weight: ${WEIGHTS.normal};
        font-size: ${TYPE_SCALE.paragraph};
        font-family: ${FAMILIES.sansSerif};
        text-rendering: optimizeSpeed;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ol, ul {
        list-style: none;
    }

    img {
        width: 100%;
    }
`;

export default GlobalStyles;