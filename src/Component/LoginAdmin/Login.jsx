import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [errorText, setErrorText] = useState("")

    const loginAsAdmin = (e) => {
        e.preventDefault();

        if (username.trim() == "" || password.trim() == "") {
            setErrorText("Bir şeylər daxil edin...");
            return;
        }

        console.log(localStorage.getItem("adminData"))
        const adminData = localStorage.getItem("adminData")
            ? JSON.parse(localStorage.getItem("adminData")) :
            [];

        if (adminData?.length) {
            adminData.forEach((item) => {
                if (item?.username == username && item?.password == password) {
                    localStorage.setItem("adminProfile", JSON.stringify(item))
                    setErrorText("Daxil olduz!")
                    window.location = "/admin-panel";
                }
                else {
                    setErrorText("Məlumat tapılmadı")
                }
            })
        }
        else {
            setErrorText("Heç bir qeydiyyat mövcud deyil")
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={loginAsAdmin}>
                    <label>
                        <input type="text" placeholder='surname' onChange={
                            (e) => setUsername(e.target.value)
                        } />
                    </label>
                    <label >
                        <input type="password" placeholder='password' onChange={
                            (e) => setPassword(e.target.value)
                        } />
                    </label>
                    <input type="submit" value="Daxil ol" />
                </form>
                {
                    errorText && <p>
                        {errorText}
                    </p>
                }
            </div>
        </div>
    )
}

export default Login