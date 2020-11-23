import React from 'react'
import './Register.css';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { notification } from 'antd'
const Register = () => {

    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const form = event.target;
            const user = {
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
            }
            await axios.post('http://localhost:3001/users/signup', user)
            notification.success({ message: 'Registered!', description: 'User successfully registered' })
            history.push('/login')
        } catch (error) {
            console.error(error)
            notification.error({ message: 'Register failed', description: 'there was a problem trying to register the user' })
        }

    }

    return (
        <form className="register" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input type="text" name="name" placeholder="Introduce your name" />
            <input type="email" name="email" placeholder="Introduce your email" />
            <input type="password" name="password" placeholder="Introduce your password" />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register