import React from "react"
import { useParams } from "react-router-dom"

const TaskForm: React.FC = () => {
    const { type } = useParams();
    return (
        <h1>{type ? "Edit" :"Create" } TaskForm</h1>
    )
}

export default TaskForm