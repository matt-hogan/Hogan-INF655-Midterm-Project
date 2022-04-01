import React, { useState } from "react";
import Task from "./Task";

export default function Tasks ({ taskList, handleDelete, handleCheck }) {
    // const taskManager = () => {
    //     const int = Math.floor(Math.random()*TaskData.length);
    //     return TaskData[int].title;
    // };
    // const [taskNum, setTaskNum] = useState(3);
    // const handleTask = () => {
    //     setTaskNum((prev) => {
    //         return prev + 1;
    //     });
    // };
    
    if (!taskList || taskList.length === 0) {
        return <p>No Tasks</p>
    }

    return (
        <div>
            {/* <p>{props.text} {name}, you have a task of {taskManager()}</p> */}
            {taskList.map((task) => (
                <Task 
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    handleDelete={handleDelete}
                    checked={task.checked}
                    handleCheck={handleCheck}
                />
            ))}
        </div>
    );
}

// Tasks.defaultProps = {
//     name: "Matt",
// };
