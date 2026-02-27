import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
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
            setErrorText("Heç bir qeydiyyat mövcud deyil")
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
                            type="password"
                            placeholder='Parol daxil et: ' onChange={
                                (e) => setPassword(e.target.value)
                            } />
                    </label>
                    <input
                        className='register-form-submit'
                        type="submit"
                        value="Daxil olun!" />
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