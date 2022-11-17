import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { httpClient } from '../../api/httpClient';
import { useGetData } from '../../utils/hooks/useGetData';
import Spinner from '../../components/Spinner';
import Alert from '../../components/Alert';
import PageTitle from '../../components/PageTitle';
import PhotosGrid from './components/PhotosGrid';
import PhotoPreview from './components/PhotoPreview';

const Photos = ({ match }) => {
    const albumId = match.params.id;
    const [photoId, setPhotoID] = useState('');
    const [imageHasLoaded, setImageHasLoaded] = useState(true);
    const [previewPhoto, setPreviewPhoto] = useState(null);
    const [isError, setIsError] = useState(null);
    const [loading, data, error] = useGetData(`/photos?albumId=${albumId}`);

    const handleChangePhotoId = (id) => {
        setPhotoID(id);
    };

    useEffect(() => {
        setImageHasLoaded(true);
        setIsError(null);
        const getPhotoById = async () => {
            try {
                const { data } = await httpClient.get(`/photos/${photoId}`);
                setPreviewPhoto(data);
            } catch (error) {
                setIsError(error.message);
            } finally {
                setImageHasLoaded(false);
            }
        }
        getPhotoById();
    }, [photoId])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return (
            <Alert
                modifiers="error"
                message="Uh oh! Something went wrong :("
                description="Look like something went wrong. Please check your connection and/or try again later."
            />
        )
    }

    const photos = data ? data : null;
    const renderPreviewPhoto = imageHasLoaded ? <Spinner /> : <PhotoPreview {...previewPhoto} />;
    return (
        <>
            <PageTitle
                cornerLink={{
                    to: '/',
                    content: 'Back To Home'
                }}
            >
                Photos By Album
            </PageTitle>
            <Wrapper>
                <PhotosGrid
                    handleChangePhotoId={handleChangePhotoId}
                    photos={photos}
                />
                {renderPreviewPhoto}
                {isError && (
                    <Alert
                        modifiers="error"
                        message="Uh oh! Something went wrong :("
                        description="Look like something went wrong. Please check your connection and/or try again later."
                    />
                )}
            </Wrapper>
        </>
    )
};

const Wrapper = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 660px;
`;

export default Photos;