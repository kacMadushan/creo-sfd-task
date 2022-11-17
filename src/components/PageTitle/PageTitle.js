import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../Buttons';
import TextField from '../TextField';
import { COLORS, WEIGHTS, TYPE_SCALE } from '../../constants/themes';

const PageTitle = ({ children, cornerLink, cornerInput }) => {
    return (
        <Wrapper>
            <Title>{children}</Title>
            {cornerLink && (
                <PrimaryButton
                    as={Link}
                    to={cornerLink.to}
                >
                    {cornerLink.content}
                </PrimaryButton>
            )}
            {cornerInput && (
                <TextField
                    type="text"
                    placeholder="Search..."
                    value={cornerInput.value}
                    onChange={cornerInput.onChange}
                />
            )}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    border-bottom: 1px solid ${COLORS.gray[200]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
    margin: 1.5rem auto;
`;

const Title = styled.h2`
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};
    font-size: ${TYPE_SCALE.header2};
`;

export default PageTitle;