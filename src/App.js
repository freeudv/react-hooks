import React from 'react';
import './App.css';
import {useForm} from './useForm'

const App = () => {
    const [values, handleChange] = useForm({email: '', password: ''});

    return (
        <form>
            <input
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
            />
        </form>
    );
};

export default App;
