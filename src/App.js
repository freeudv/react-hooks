import React, {useState, useEffect} from 'react';
import './App.css';
import {useForm} from './customHooks/useForm';
import Hello from './Hello';
import {useFetch} from './customHooks/useFetch';

const App = () => {
    const [showHello, setShowHello] = useState(true);

    const [values, handleChange] = useForm({
        firstName: '',
        email: '',
        password: ''
    });

    const [count, setCount] = useState(() =>
        JSON.parse(localStorage.getItem('count'))
    );
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
    useEffect(() => localStorage.setItem('count', JSON.stringify(count)), [
        count
    ]);

      useEffect(() => {
        const onMouseMove = (e) => {
          console.log('-----', e);
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove')
        };
    }, []);

    return (
        <div>
            <div>
                <div>{loading ? '...Loading' : data}</div>
                <div>{count}</div>
                <button onClick={() => setCount(c => c + 1)}>
                    increment count
                </button>
            </div>
            <br />
            <div>
                <button onClick={() => setShowHello(!showHello)}>
                    toggle Hello
                </button>
                {showHello && <Hello />}
            </div>
            <br />
            <form>
                <input
                    name="firstName"
                    value={values.firstName}
                    placeholder="first name"
                    onChange={handleChange}
                />
                <input
                    name="email"
                    value={values.email}
                    placeholder="email"
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    value={values.password}
                    placeholder="password"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default App;
