import React, {useEffect, useState} from 'react';
import {useFetch} from './customHooks/useFetch';
import {useMeasure} from './customHooks/useMeasure'

export default function Hello() {
    const [count, setCount] = useState(() =>
        JSON.parse(localStorage.getItem('count'))
    );
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
    useEffect(() => localStorage.setItem('count', JSON.stringify(count)), [
        count
    ]);

    useEffect(() => {
        console.log('render');

        return () => {
            console.log('unmount');
        };
    }, []);

    const [rect, divRef] = useMeasure([data])

    return (
        <div>
            <div style={{display: 'flex'}}>
                <div ref={divRef}>{loading ? '...Loading' : data}</div>
            </div>

            <pre>{JSON.stringify(rect, null, 2)}</pre>

            <div>count: {count}</div>

            <button onClick={() => setCount(c => c + 1)}>
                increment count
            </button>
            <button onClick={() => setCount(c => (c > 1 ? c - 1 : 0))}>
                decrement count
            </button>
        </div>
    );
}
