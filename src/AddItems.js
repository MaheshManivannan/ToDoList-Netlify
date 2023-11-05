import React from "react";
import {FaRegPlusSquare}  from "react-icons/fa";
import { useRef } from "react";
const AddItems = ({addItems,setAddItems,changeSubmit}) => {
    
    const inputReference = useRef();
    return (
        <>
        <form onSubmit={(e) => changeSubmit(e)}>
            <label htmlFor="additems">Add Items:</label>
            <input 
            id="additems"
            type="text"
            ref={inputReference}
            placeholder="Add Task"
            value={addItems}
            onChange={(e) => setAddItems(e.target.value)}
            required
            />
            <button type="submit" onClick={() => inputReference.current.focus()}>
            <FaRegPlusSquare />
            </button>
        </form>
        </>
    );
}
export default AddItems;