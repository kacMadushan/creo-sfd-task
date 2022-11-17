import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SecondaryButton } from '../../../../components/Buttons';
import { COLORS, WEIGHTS, TYPE_SCALE } from '../../../../constants/themes';

const ListingAlbum = ({ id, title }) => {
    return (
        <Wrapper>
            <AlbumTitle>{title}</AlbumTitle>
            <SecondaryButton as={Link} to={`/photos/${id}`}>View Album</SecondaryButton>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    border: 1px solid ${COLORS.gray[200]};
    border-radius: 4px;
    padding: 0.625rem 1rem;
    margin-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AlbumTitle = styled.h6`
    color: ${COLORS.blue[800]};
    font-weight: ${WEIGHTS.normal};
    font-size: ${TYPE_SCALE.header6};
`;

export default ListingAlbum;