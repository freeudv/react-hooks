import {useState, useLayoutEffect, useRef} from 'react';

export const useMeasure = (depends) => {
    const myRef = useRef();
    const [rect, setRect] = useState({});

    useLayoutEffect(() => {
        setRect(myRef.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, depends);

    return [rect, myRef];
}
