import React, { useState , useEffect} from "react";
import "./style.css";
import Menu from "./MenuApi.js";
import Card from "./Card";
import NavBarCards from "./NavBarCards";

import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



const Resturant = () => {

  const [invRecs,setInvRecs]=useState([]);
  const invCollectionRef=collection(db,"inventory");

  const [menuData, setMenuData] = useState(invRecs); // cards
  const [menuList, setMenuList] = useState(uniqueList); // categories

  useEffect(()=>{
    const getInvRecs=async()=>{
      const data=await getDocs(invCollectionRef);
      setInvRecs(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      
    };
    getInvRecs();
    console.log(invRecs);
  })



const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);



  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(invRecs);
      return;
    }

    const updatedList = invRecs.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };





  return (
    <div style={{backgroundColor: 'rgb(243, 244, 246)'}}>
      <NavBarCards filterItem={filterItem} menuList={menuList} />
      <Card menuData={menuData} />
    </div>
  );
};

export default Resturant;