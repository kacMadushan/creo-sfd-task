import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { COLORS, TYPE_SCALE, WEIGHTS } from '../../constants/themes';

const STATUS_MODIFIERS = {
    error: () => `
        color: ${COLORS.red[800]};
        background-color: ${COLORS.red[100]};
    `,
    warning: () => `
        color: ${COLORS.green[800]};
        background-color: ${COLORS.green[100]};
    `,
    success: () => `
        color: ${COLORS.yellow[800]};
        background-color: ${COLORS.yellow[100]};
    `,
};

const Alert = ({ message, description, modifiers }) => {
    return (
        <Wrapper
            modifiers={modifiers}
            as={motion.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Message>{message}</Message>
            <Description>{description}</Description>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: block;
    text-align: center;
    max-width: 600px;
    padding: 1rem;
    margin: 4rem auto;
    border-radius: 4px;
    color: ${COLORS.blue[800]};
    background-color: ${COLORS.blue[100]};

    ${applyStyleModifiers(STATUS_MODIFIERS)};
`;

const Message = styled.h6`
    font-weight: ${WEIGHTS.bold};
    font-size: ${TYPE_SCALE.paragraph};
    margin-bottom: 0.375rem;
`;

const Description = styled.p`
    font-weight: ${WEIGHTS.medium};
    font-size: ${TYPE_SCALE.helperText};
`;

export default Alert;