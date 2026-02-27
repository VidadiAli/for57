import React, { useEffect } from 'react'
import './AdminPanel.css'
import AdminNavbar from './AdminNavbar'
import PanelArea from './PanelArea'

const AdminPanel = () => {

    useEffect(() => {
        setTimeout(() => {
            if (!localStorage.getItem('adminProfile')) {
                window.location = '/'
            }
        }, 1000)
    }, [])

    if (!localStorage.getItem('adminProfile')) {
        return <p>
            Siz daxil olmayızbsız!
        </p>
    }

    return (
        <div>
            <AdminNavbar />
            <PanelArea />
        </div>
    )
}

export default AdminPanel