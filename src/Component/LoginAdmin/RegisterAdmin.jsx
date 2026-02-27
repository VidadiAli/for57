import React, { useState } from 'react'
import './Login.css'

const RegisterAdmin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
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

        const adminData = [];
        const admin = {
            password, username
        }

        adminData.push(admin);
        localStorage.setItem("adminData", JSON.stringify(adminData))
        setErrorText({
            message: "Uğurlu",
            messageType: 'success'
        });
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