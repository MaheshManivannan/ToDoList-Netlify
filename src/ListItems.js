import React from "react";

import EachList from "./EachList";
const ListItems = ({list,changeCheck,changeDelete}) => {

    return (
        <>
        <ul className="Contentul">
        {
            list.map((ele) => (
                <EachList 
                ele = {ele}
                key = {ele.id}
                changeCheck = {changeCheck}
                changeDelete = {changeDelete}
                />

            )
            )
        }
    </ul>
        </>
    );
}
export default ListItems;