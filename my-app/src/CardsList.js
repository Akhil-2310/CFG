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



const Resturant = (props) => {
  console.log(props);
  const [invRecs,setInvRecs]=useState([]);
  const invCollectionRef=collection(db,"inventory");

  const uniqueList = [
    ...new Set(
      invRecs.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];

  const [menuData, setMenuData] = useState(invRecs); // cards
  const [menuList, setMenuList] = useState(uniqueList); // categories
  
  

  useEffect(()=>{
    if(uniqueList.join()!==menuList.join()){
      setMenuList(uniqueList)
    }
  
  },[uniqueList])


  

  useEffect(()=>{
    const getInvRecs=async()=>{
      const data=await getDocs(invCollectionRef);
 
      
      setInvRecs(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      setMenuData(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      
    };
    getInvRecs();
  
  },[])








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
      <Card menuData={menuData} buyList={props.buyList} setBuyList={props.setBuyList} />
    </div>
  );
};

export default Resturant;