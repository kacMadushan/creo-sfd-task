import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import {
    COLORS,
    WEIGHTS,
    TYPE_SCALE,
    FAMILIES
} from '../../constants/themes';

export const BUTTON_MODIFIERS = {
    small: () => `
        padding: 0.5rem;
        font-size: ${TYPE_SCALE.helperText};
    `,
    large: () => `
        padding: 0.75rem 1.25rem;
        font-size: ${TYPE_SCALE.header6};
    `,
    warning: () => `
        background-color: ${COLORS.yellow[100]};
        color: ${COLORS.yellow[800]};

        &:hover, &:focus {
            background-color: ${COLORS.yellow[200]};
        }

        &:active {
            background-color: ${COLORS.yellow[200]};
        }
    `,
    error: () => `
        background-color: ${COLORS.red[100]};
        color: ${COLORS.yellow[800]};

        &:hover, &:focus {
            background-color: ${COLORS.red[200]};
        }

        &:active {
            background-color: ${COLORS.red[200]};
        }
    `,
    success: () => `
        background-color: ${COLORS.green[100]};
        color: ${COLORS.green[800]};

        &:hover, &:focus {
            background-color: ${COLORS.green[200]};
        }

        &:active {
            background-color: ${COLORS.green[200]};
        }
    `,
};

const Button = styled.button`
    border: 0;
    color: ${COLORS.blue[800]};
    font-weight: ${WEIGHTS.medium};
    font-size: ${TYPE_SCALE.paragraph};
    font-family: ${FAMILIES.sansSerif};
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background-color: ${COLORS.blue[200]};
    }

    &:focus {
        background-color: ${COLORS.blue[200]};
    }

    &:active {
        background-color: ${COLORS.blue[200]};
    }

`;

export const PrimaryButton = styled(Button)`
    background-color: ${COLORS.blue[100]};
    border-radius: 1.5rem;

    &:disabled {
        background-color: ${COLORS.gray[200]};
        color: ${COLORS.gray[800]};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
    border: 2px solid ${COLORS.blue[800]};
    border-radius: 1.5rem;

    &:disabled {
        background-color: ${COLORS.gray[200]};
        color: ${COLORS.gray[800]};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
    background: none;
    border: 2px solid transparent;

    &:disabled {
        background-color: ${COLORS.gray[200]};
        color: ${COLORS.gray[800]};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;