import React from "react"
import { useParams } from "react-router-dom"

const UserForm: React.FC = () => {
    const { id } = useParams();

    return (
        <h1>User Form Id: {id}</h1>

    )
}

export default UserForm