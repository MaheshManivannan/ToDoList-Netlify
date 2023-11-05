import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const EachList = ({ele,changeCheck,changeDelete}) => {

    return <>
    <li key={ele.id}>
                    <input 
                    type="checkbox"
                    checked={ele.checked}                                                        
                    onChange={() => changeCheck(ele.id)}

                    />
                    <label onDoubleClick={() => changeCheck(ele.id)} style = {{textDecoration: (ele.checked  === true) ? "line-through" : "none"}}>{ele.task}</label>
                    <FaRegTrashAlt 
                    type="button"
                    onClick={() => changeDelete(ele.id)}
                    />
                </li>
    </>
}
export default EachList;