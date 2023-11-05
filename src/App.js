import { useState } from "react";
import React from "react";
import Header from "./Header";
import "./Style.css";
import Footer from "./Footer";
import Content from "./Content";
import AddItems from "./AddItems";
import SearchItems from "./SearchItems";
const App = () => {
  const [list,setList] = useState(JSON.parse(localStorage.getItem("TO_DO_LIST")));

    const [addItems,setAddItems] = useState("");

    const [search,setSearch] = useState("");

    

    const newItems = (ele) => {
      const id = (list.length > 0) ? list[list.length -1].id + 1 : 1;
      const a = {id,task:ele,checked:false};
      const c = [...list,a];
      setList(c);
      localStorage.setItem("TO_DO_LIST",JSON.stringify(c));
    
    }
    

const changeCheck = (id) =>{
   const chCheck = list.map((ele) => (id === ele.id) ? {...ele, checked: !ele.checked} : ele);
   setList(chCheck);
   localStorage.setItem("TO_DO_LIST",JSON.stringify(chCheck));
}
const changeDelete = (id) =>{
    const chDelete = list.filter((ele) => (id === ele.id) ? null : ele);
    setList(chDelete);
    localStorage.setItem("TO_DO_LIST",JSON.stringify(chDelete));
}
const changeSubmit = (e) =>{
  e.preventDefault();
  newItems(addItems);
  setAddItems("");

}

  return <>
  <Header title = "To Do List"/>
  <AddItems 
  addItems= {addItems}
  setAddItems={setAddItems}
  changeSubmit={changeSubmit}
  />
  <SearchItems 
  search= {search}
  setSearch= {setSearch}
  />
  <Content 
  list = {list.filter((ele) => ((ele.task).toLowerCase()).includes(search.toLowerCase()))}
  changeCheck = {changeCheck}
  changeDelete = {changeDelete}
  />
  <Footer 
  length = {list.length}
  />
  
  </>
}
export default App;