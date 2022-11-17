import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const PHOTO_MODIFIERS = {
    small: () => `
        width: 60px;
        height: 60px;
    `,
    thumb: () => `
        width: 150px;
        height: 150px;
    `,
    full: () => `
        width: 600px;
        height: 600px;
    `,
    rounded: () => `
        border-radius: 5px;
    `,
    circle: () => `
        border-radius: 50%;  
    `,
};

const Photo = styled.img`
    width: 100%;
    height: auto;
    vertical-align: middle;

    ${applyStyleModifiers(PHOTO_MODIFIERS)};
`;

export default Photo;