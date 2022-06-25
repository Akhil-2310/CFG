import React, { useEffect, useState } from "react";
import InvCard from "./InvCard";
import {
  getDocs,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";
import Showform from "./form";
import { Link, Routes, Route } from "react-router-dom";

function ShowInventory() {

  const options = [
    {value: '', text: '--Choose an option--'},
    {value: 'pulses', text: 'Pulses'},
    {value: 'grains', text: 'Grains'},
    {value: 'fruits', text: 'Fruits'},
    {value: 'vegetables', text: 'Vegetables'},
    {value: 'others', text: 'Others'},
  ];
  
  const [activatedInput, changeActivation] = useState(false);
  const [newcat, setnewcat] = useState(options[0].value);
  const [newitemname, setitemname] = useState("");
  const [newitemcost, setitemcost] = useState(0);
  const [invRecs, setInvRecs] = useState([]);
  const invCollectionRef = collection(db, "inventory");


  useEffect(() => {

    const getInvRecs = async () => {
      const data = await getDocs(invCollectionRef);
      setInvRecs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }
      )));
     
    };
    getInvRecs();
  },[]);



  const handleSubmit = async (e) => {
    
    e.preventDefault()
    try {
      await addDoc(collection(db, "inventory"), {
        itemname: newitemname, category: newcat, itemcost: Number(newitemcost),amount:0
      })
      window.location.reload();
      // onClose()
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
          My Inventory
        </h1>

        <table class="table-auto w-full text-left whitespace-no-wrap mt-10">
          <thead>
            <tr class="grid grid-cols-3 gap-4">
              <th class=" d-flex justify-content-center px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Name
              </th>
              <th class="  d-flex justify-content-center px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Category
              </th>
              <th class=" d-flex justify-content-center px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Price/kg
              </th>
            </tr>
          </thead>
        </table>
        {invRecs.map((invRecItem, index) => {
          
          return (
            <InvCard
              key={index}
              name={invRecItem.itemname}
              category={invRecItem.category}
              price={invRecItem.itemcost}
              id={invRecItem.id}
            ></InvCard>
          );
        })}
      </div>

      <h1>Add New Item</h1>

         <form class="p-10">
            <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(event)=>{setitemname(event.target.value)}}  />
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Category</label>
                <div>
                <select value={newcat} onChange={(event)=>{setnewcat(event.target.value)}} class="mx-auto">
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
                </div>
       
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Price</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" onChange={(event)=>{setitemcost(event.target.value)}} />
            </div>

            <button type="submit" class="btn mt-5" onClick={handleSubmit} style={{ backgroundColor: "rgb(79, 90, 132)", color: "white" }}> Submit </button>
        </form>
    </div>
  );
}

export default ShowInventory;
