import axios from '../Register/node_modules/axios';
import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { notification } from '../Register/node_modules/antd';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post('http://localhost:3001/users/login', { email, password })
            localStorage.setItem('token', res.data.token)
            notification.success({ message: 'Logged in!', description: 'User successfully logged in' })
            props.setUser(res.data.user)
            history.push('/')
        } catch (error) {
            console.error(error)
            notification.error({ message: 'Login failed', description: 'there was a problem trying to login the user' })
        }

    }
    return (
        <form className="register" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="email" onChange={event => setEmail(event.target.value)} name="email" placeholder="Introduce your email" value={email} />
            <input type="password" onChange={event => setPassword(event.target.value)} name="password" placeholder="Introduce your password" value={password} />
            <button type="submit">Login</button>
        </form>
    )
}


// export class Login extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             email:'',
//             password:''
//         }
//     }
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

export default Login