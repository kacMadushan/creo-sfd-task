import { useState, useEffect } from 'react';
import { httpClient } from '../../api/httpClient';

export const useGetData = (endpoint) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const getDataEndpoint = async () => {
            try {
                const { data } = await httpClient.get(endpoint);
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getDataEndpoint();
    }, [endpoint])

    return [loading, data, error];
};