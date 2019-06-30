import React, {useState} from 'react';
import './App.css';
import {useForm} from './customHooks/useForm';
import Hello from './Hello';
import {useMeasure} from './customHooks/useMeasure'

const App = () => {
    const [values, handleChange] = useForm({
        firstName: '',
        email: '',
        password: ''
    });
    const [showHello, setShowHello] = useState(true);

    //const inputRef = useRef();
    // useLayoutEffect(() => {
    //     console.log('-----', inputRef.current.getBoundingClientRect());
    // }, [inputRef]);

    //with custom Hook
    const [rect, inputRef] = useMeasure([]);
    console.log('rect-----', rect);

    return (
        <div>
            <div>
                <button onClick={() => setShowHello(!showHello)}>
                    toggle Hello
                </button>
                {showHello && <Hello />}
            </div>
            <br />
            <div>
                <input
                    name="firstName"
                    value={values.firstName}
                    placeholder="first name"
                    onChange={handleChange}
                    ref={inputRef}
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
                <button onClick={() => inputRef.current.focus()}>focus</button>
            </div>
        </div>
    );
};

export default App;
