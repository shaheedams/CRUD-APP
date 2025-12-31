import React from "react"
import { Outlet } from "react-router-dom"

const UserLayout: React.FC = () => {
    return (
        <>
            <h1>UserLayout</h1>
            <div>
                <Outlet/>
            </div>
        </>

    )
}

export default UserLayout