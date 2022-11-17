import React from 'react';
import styled from 'styled-components';
import Alert from '../../../../components/Alert';
import ListingAlbum from '../ListingAlbum';


const Listing = ({ albums }) => {
    return (
        <Wrapper>
            {!albums.length && (
                <Alert
                    message="No Results Found"
                    description="We're sorry. We were not able to find a match."
                />
            )}
            {albums.map((album) => (
                <ListingAlbum key={album.id} {...album} />
            ))}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    padding-bottom: 1.5rem;
`;

export default Listing;