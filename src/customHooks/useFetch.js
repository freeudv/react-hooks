import {useEffect, useState, useRef} from 'react';

export const useFetch = url => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({data: null, loading: false});

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        };
    }, [isCurrent]);

    useEffect(() => {
        setState(state => ({data: state.data, loading: true}));

        fetch(url)
            .then(response => response.text())
            .then(data => {
                if (isCurrent.current) {
                    setState({data, loading: false});
                }
            });
    }, [url]);

    return state;
};
