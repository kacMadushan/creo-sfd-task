import React from 'react';
import styled from 'styled-components';
import PhotosGridItem from '../PhotosGridItem';

const PhotosGrid = ({ photos, handleChangePhotoId }) => {
    return (
        <Wrapper>
            {photos.map((photo) => (
                <PhotosGridItem
                    handleChangePhotoId={handleChangePhotoId}
                    key={photo.id}
                    {...photo}
                />
            ))}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    padding: 0.75rem;
    height: 600px;
    overflow-x: auto;
`;

export default PhotosGrid;