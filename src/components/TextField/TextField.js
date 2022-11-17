import React from 'react';
import styled from 'styled-components';
import {
    COLORS,
    WEIGHTS,
    TYPE_SCALE,
    FAMILIES
} from '../../constants/themes';

const TextField = ({ type, placeholder, value, onChange }) => {
    return (
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
};

const Input = styled.input`
    border: 2px solid ${COLORS.gray[200]};
    border-radius: 4px;
    font-weight: ${WEIGHTS.normal};
    font-size: ${TYPE_SCALE.paragraph};
    font-family: ${FAMILIES.sansSerif};
    padding: 0.375rem 1rem;
    width: 316px;
    height: 32px;

    &:focus {
        border: 2px solid ${COLORS.blue[800]};
        outline: 0;
    }
`;

export default TextField;