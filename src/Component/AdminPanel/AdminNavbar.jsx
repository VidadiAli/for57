import React, { useEffect, useState } from 'react'

const AdminNavbar = () => {
    const [myProfile, setMyProfile] = useState(null)

    useEffect(()=>{
        const profileInfo = JSON.parse(localStorage.getItem('adminProfile'));
        setMyProfile(profileInfo)
    }, [])

    return (
        <div className='admin-menu'>
            <div className='admin-menu-box'>
                <span className='menu-logo'>Logo</span>

                <div className='profile-info-box'>
                    <span className='profile-info'>
                        {
                            myProfile?.username
                        }
                    </span>
                    <button className='log-out-as-admin'>Log out</button>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar