import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/Buttons';
import { COLORS, WEIGHTS, TYPE_SCALE } from '../../constants/themes';

const NotFound = () => {
    return (
        <Wrapper>
            <Title>404 not found</Title>
            <SubTitle>This Page your Requested Coulf Not Found</SubTitle>
            <PrimaryButton modifiers="large" as={Link} to={`/`}>Back To Home</PrimaryButton>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
`;

const Title = styled.h1`
    color: ${COLORS.blue[800]};
    font-weight: ${WEIGHTS.bold};
    font-size: ${TYPE_SCALE.header1};
    line-height: 2.5rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  color: ${COLORS.blue[800]};
  font-weight: ${WEIGHTS.normal};
  font-size: ${TYPE_SCALE.header3};
  margin-bottom: 1rem;
`;

export default NotFound;