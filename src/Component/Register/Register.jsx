import React, { useState } from 'react'

const Register = () => {
    const dataValues = {
        userName: '',
        password: ''
    }

    const [dataValuesState, setDataValuesState] = useState(dataValues)
    const createUser = (e) => {
        e.preventDefault();
        let dataArray = [];
        dataArray = localStorage.getItem("users") ?
            JSON.parse(localStorage.getItem("users")) :
            [];
        dataArray.push(dataValuesState);
        localStorage.setItem("users", JSON.stringify(dataArray))
    }
    return (
        <div>
            <h1>Qeydiyyat</h1>
            <form onSubmit={createUser}>
                <input type="text" placeholder='username'
                    onChange={(e) => {
                        setDataValuesState({
                            ...dataValuesState,
                            userName: e.target.value
                        })
                    }}
                />
                <input type="password" placeholder='password'
                    onChange={(e) => {
                        setDataValuesState({
                            ...dataValuesState,
                            password: e.target.value
                        })
                    }}
                />
                <input type="submit" value="Qeyd ol" />
            </form>
        </div>
    )
}

export default Register