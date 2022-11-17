import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Photo from '../../../../components/Photo';
import { COLORS } from '../../../../constants/themes';

const PhotosGridItem = ({ id, thumbnailUrl, title, handleChangePhotoId }) => {
    return (
        <Wrapper
            as={motion.div}
            onClick={() => handleChangePhotoId(id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Photo src={thumbnailUrl} alt={title} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    border: 2px solid ${COLORS.gray[200]};
    cursor: pointer;
`;

export default PhotosGridItem;