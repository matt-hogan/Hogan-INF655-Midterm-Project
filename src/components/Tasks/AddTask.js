import React, { useContext, useState, useEffect } from "react";
import TaskContext from "../context/TaskContext";
import Card from "../shared/Card";

export default function AddTask () {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { addTask, updateTask, taskEdit } = useContext(TaskContext);

    useEffect(() => {
        if (taskEdit.edit === true) {
            setTitle(taskEdit.task.title);
            setDescription(taskEdit.task.description);
        }
    }, [taskEdit]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length !== 0 && description.trim().length > 0) {
            const newTask = {
                title,
                description,
            };
            if (taskEdit.edit === true) {
                updateTask(taskEdit.task.id, newTask);
            } else {
                addTask(newTask);
            }
            setTitle("");
            setDescription("");
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Add a task in the Task List</h2>
                <div>
                    <input className="inputBox"
                        onChange={handleTitleChange}
                        type="text"
                        placeholder="Name"
                        value={title} />
                    <input className="inputBox"
                        onChange={handleDescriptionChange}
                        type="text"
                        placeholder="Description"
                        value={description} />
                </div>
                <button className="btn">Add Task</button>
            </form>
        </Card>
    )
}