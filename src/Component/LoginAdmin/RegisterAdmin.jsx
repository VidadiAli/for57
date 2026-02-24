import React, { useState } from 'react'

const RegisterAdmin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [errorText, setErrorText] = useState("")

    const registerAsAdmin = (e) => {
        e.preventDefault();

        if (username.trim() == "" || password.trim() == "") {
            setErrorText("Bir şeylər daxil edin...");
            return;
        }

        const adminData = [];
        const admin = {
            password, username
        }

        adminData.push(admin);
        localStorage.setItem("adminData", JSON.stringify(adminData))
        setErrorText("Uğurlu")
    }
    return (
        <div>
            <div>
                <form onSubmit={registerAsAdmin}>
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
                    <input type="submit" value="Hesab yarat!" />
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

export default RegisterAdmin