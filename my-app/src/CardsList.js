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

  const uniqueList = [
    ...new Set(
      invRecs.map((curElem) => {
        console.log(curElem.category)
        return curElem.category;
      })
    ),
    "All",
  ];

  const [menuData, setMenuData] = useState(invRecs); // cards
  const [menuList, setMenuList] = useState(uniqueList); // categories
  

  useEffect(()=>{
    setMenuList(uniqueList)
  },[uniqueList])

  console.log("unique list",uniqueList)
  

  useEffect(()=>{
    const getInvRecs=async()=>{
      const data=await getDocs(invCollectionRef);
      console.log(data.docs)
      console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      setInvRecs(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      setMenuData(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      
    };
    getInvRecs();
    console.log(invRecs);
  },[])





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
      <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Thank you for registering!</strong> You can choose from the items below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button>
</div>
      <NavBarCards filterItem={filterItem} menuList={menuList} />
      <Card menuData={menuData} />
    </div>
  );
};

export default Resturant;