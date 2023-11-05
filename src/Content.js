import React from "react";
import ListItems from "./ListItems";
const Content = ({list,changeCheck,changeDelete}) => {
    

                                                                                                                                                                                                                                                                        
return (   
    <>        
    {(list.length > 0) ?                                                                                 
    <ListItems 
    list = {list}
    changeCheck = {changeCheck}
    changeDelete = {changeDelete}
    />
    
    : <p>Your list is empty</p>
}
    </>
)
}
export default Content;