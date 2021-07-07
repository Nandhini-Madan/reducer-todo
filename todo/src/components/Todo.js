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
        })   

    }
    const handleClear=(e)=>{
        console.log("clearCompleted",e);
        dispatch({
            type:CLEAR_COMPLETED,
            payload:e
        })
    }

    return (
        <div>
            <h1>Todo List</h1>
            <div className="allign">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text"
                    name="newTask"
                    value={newTask}
                    onChange={handleChange} >
                </input>
                <button>Submit</button>
                
            </form>

            <button className="clear-btn" onClick={handleClear}> CLEAR_COMPLETED</button>
            </div>
            
            
            {state.map((item) => {
                return (
                    <div className="allign" key={item.id}>
                        <p className={`list ${item.completed ? "completed" : " "}`}>{item.item}</p>
                        <button className="donebtn"onClick={() => { handleToggle(item.id) }}>Task Done</button>
                    </div>
                )
            })}

        </div>
    )
}
export default Todo;