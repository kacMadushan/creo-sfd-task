import React from 'react';
import styled from 'styled-components';
import Photo from '../../../../components/Photo';

const PhotoPreview = ({ url, title }) => {
    return (
        <Wrapper>
            <Photo src={url} alt={title} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 100%;
    height: 648px;
`;

export default PhotoPreview