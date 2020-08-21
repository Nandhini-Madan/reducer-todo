import React, { useReducer, useState } from "react";
import {
    ADD_LIST,
    CLEAR_COMPLETED,
    TOGGLE,
    listReducers,
    initialState
} from "../reducers/listReducers";




const Todo = () => {

    const [newTask, setNewTask] = useState("")
    const [state, dispatch] = useReducer(listReducers, initialState);
    const handleChange = (e) => {
        setNewTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_LIST,
            payload: newTask
        })
        console.log("gs", state);


    }
    const handleToggle = (e) => {
        //  e.preventDefault();
        console.log("toggleID", e);
        dispatch({
            type: TOGGLE,
            payload: e
        }

        )
        //    

    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="newTask"
                    value={newTask}
                    onChange={handleChange} >
                </input>
                <button>Submit</button>
                <button></button>
            </form>

            {state.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.item}</p>
                        <button onClick={() => {handleToggle(item.id)}}>{item.id}</button>
                    </div>
                )




            })}

        </div>
    )
}
export default Todo;