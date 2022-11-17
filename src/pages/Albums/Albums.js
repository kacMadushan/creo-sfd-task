import React, { useState } from 'react';
import { useGetData } from '../../utils/hooks/useGetData';
import { filterAlbums } from '../../utils/selectors/albums';
import Spinner from '../../components/Spinner';
import Alert from '../../components/Alert';
import PageTitle from '../../components/PageTitle';
import Listing from './components/Listing';

const Albums = () => {
    const [query, setQuery] = useState('');
    const [loading, data, error] = useGetData('/albums');

    const handleOnChange = (e) => {
        const { value } = e.target;
        setQuery(value);
    };

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
    const albums = data ? data : [];
    const filterdAlbums = filterAlbums(albums, query);
    return (
        <>
            <PageTitle cornerInput={{
                value: query,
                onChange: handleOnChange
            }}>
                All Albums
            </PageTitle>
            <Listing albums={filterdAlbums} />
        </>
    )
};

export default Albums;