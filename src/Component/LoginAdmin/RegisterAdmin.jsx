import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './Login.css'

const RegisterAdmin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [isPasswordShow, setISPasswordShow] = useState(false)
    const [errorText, setErrorText] = useState(
        {
            message: '',
            messageType: ''
        }
    )

    const registerAsAdmin = (e) => {
        e.preventDefault();

        if (username.trim() == "" || password.trim() == "") {
            setErrorText({
                message: "Bir şeylər daxil edin...",
                messageType: 'error'
            });
            return;
        }

        const adminData = localStorage.getItem('adminData') ?
            JSON.parse(localStorage.getItem('adminData')) :
            [];
        const admin = {
            password, username
        }

        if (adminData.length != 0) {
            setErrorText({
                message: "Artıq admin mövcuddur!",
                messageType: 'error'
            });
            return;
        }
        adminData.push(admin);
        localStorage.setItem("adminData", JSON.stringify(adminData))
        setErrorText({
            message: "Uğurlu",
            messageType: 'success'
        });

        setTimeout(() => {
            window.location = '/admin-login'
        }, 1000)
    }
    return (
        <div className='register-box-back'>
            <div className='register-box'>
                <form onSubmit={registerAsAdmin} className='register-form'>
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
                            type="password"
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
                    <input
                        className='register-form-submit'
                        type="submit"
                        value="Hesab yarat!" />
                </form>
                {
                    errorText?.message && <p
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

export default RegisterAdmin