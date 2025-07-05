import React, { useState } from "react"
import './TodoList.css'

function TodoList() {

    const [tasks, setTasks] = useState([]);

    const [newtask, setNewtask] = useState("");

    const textbox = (e) => {
        {/*this is for getting input from textbox */ }

        setNewtask(e.target.value);




    }

    const addTask = () => {
        {/*this is for adding task to the list */ }

        setTasks(t => [...t, { newtask }]); {/*this is for adding new task to the list */ }
        setNewtask(""); {/*this is for clearing the textbox after adding task */ }

    }


    const deleteTask = (index) => {         //this is for deleting task from the list 

        const updatedTask = tasks.filter((_, i) => i !== index);         // We use the filter method to delete a task.
        // The filter callback receives two arguments: the element (which we don't need, so we use "_") and the index "i".
        // We compare each "i" with the "index" of the task we want to delete.
        // Only tasks whose index does NOT match the one to delete are kept in the new array (updatedTask).
        // Finally, we update the tasks state with this new array.

        setTasks(updatedTask)



    }


    const moveUP = (index) => {
        if (index > 0) {
            const updatedTask = [...tasks]; // Initialize first
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]; // Then swap
            setTasks(updatedTask); // Update state
        }
    };


    const moveDown = (index) => {         /*this is for moving task down in the list */

        if (index < tasks.length - 1) {
            const updatedTask = [...tasks]; // Initialize first
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]]; // Then swap
            setTasks(updatedTask); // Update state
        }
    }
    return (
        <div className="taskContainer">

            <h1>Todo List</h1>

            <div className="text">

                <input
                    type="text"
                    className="Input"
                    value={newtask}
                    onChange={textbox}
                    placeholder="Enter a new task..."

                />
                <button onClick={addTask} className="add">Add Task</button>


            </div>
            <div className="small">

                <ol>
                    {
                        tasks.map((t, index) =>
                            <li key={index}>
                                {t.newtask}
                                <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
                                {/* we are using "()=>" is  because without 
                                                        that after the website open it will delete automatically 
                                                        to prevent that we use ()=>


                                                          Using onClick={() => deleteTask(index)}
                                                           creates a function
                                                            that will only call deleteTask(index)
                                                             when the button is clicked. */}


                                <button className="up" onClick={() => moveUP(index)}>↑</button>
                                <button className="down" onClick={() => moveDown(index)}>↓</button>



                            </li>
                        )
                    }




                </ol>
            </div>

        </div>

    )
}
export default TodoList;