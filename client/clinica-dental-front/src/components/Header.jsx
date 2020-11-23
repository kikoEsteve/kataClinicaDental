import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = (props) => {
    const logout = () => {
        localStorage.removeItem('token')
        props.setUser(null)
    }
    return (
        <header className="header">
            <NavLink to="/">Home</NavLink>
            <div className="user">
                {props.user ?
                    <>
                        <span>{props.user?.email}</span>
                        <span onClick={logout}>Logout</span>
                    </> :
                    <>
                        <NavLink to="/login">Log in</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                }
            </div>
        </header>
    )
}
export default Header