import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordShow, setISPasswordShow] = useState(false)
    const [errorText, setErrorText] = useState({
        message: '',
        messageType: ''
    })

    const loginAsAdmin = (e) => {
        e.preventDefault();

        if (username.trim() == "" || password.trim() == "") {
            setErrorText({
                message: "Bir şeylər daxil edin...",
                messageType: 'error'
            });
            return;
        }

        const adminData = localStorage.getItem("adminData")
            ? JSON.parse(localStorage.getItem("adminData")) :
            [];

        if (adminData?.length) {
            adminData.forEach((item) => {
                if (item?.username == username && item?.password == password) {
                    localStorage.setItem("adminProfile", JSON.stringify(item))
                    setErrorText({
                        message: "Daxil olduz!",
                        messageType: 'success'
                    });
                    setTimeout(() => {
                        window.location = "/admin-panel";
                    }, 800)
                }
                else {
                    setErrorText({
                        message: "Məlumat tapılmadı",
                        messageType: 'error'
                    });
                }
            })
        }
        else {
            setErrorText({
                message: "Heç bir qeydiyyat mövcud deyil",
                messageType: 'error'
            })
        }
    }
    return (
        <div className='register-box-back'>
            <div className='register-box'>
                <form onSubmit={loginAsAdmin} className='register-form'>
                    <label className='register-form-label'>
                        <input
                            className='register-form-input'
                            type="text"
                            placeholder='İstifadəçi adı daxil et: ' onChange={
                                (e) => setUsername(e.target.value)
                            } />
                    </label>
                    <label className='register-form-label'>
                        <input className='register-form-input'
                            type={isPasswordShow ? "text" : "password"}
                            placeholder='Parol daxil et: ' onChange={
                                (e) => setPassword(e.target.value)
                            } />
                        {
                            isPasswordShow ?
                                <FaEyeSlash className='register-icon'
                                    onClick={() => setISPasswordShow(!isPasswordShow)} /> :
                                <FaEye className='register-icon'
                                    onClick={() => setISPasswordShow(!isPasswordShow)} />
                        }
                    </label>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <input
                            className='register-form-submit'
                            type="submit"
                            value="Daxil olun!" />
                        <NavLink to={'/admin-register'}
                            style={{ textDecoration: 'underline' }}
                            >Qeydiyyat</NavLink>
                    </div>
                </form>
                {
                    errorText?.message &&
                    <p
                        className={`
                        ${errorText?.messageType == "success"
                                ? 'success-message'
                                : 'error-message'} response-message
                    `}>
                        {errorText?.message}
                    </p>
                }
            </div>
        </div>
    )
}

export default Login