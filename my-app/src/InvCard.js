import {React,useState} from "react";
import {
    getDocs,
    collection,
    addDoc,
    updateDoc,
    doc,
    FieldValue
  } from "firebase/firestore";
  import { db } from "./firebase";

function InvCard(props){

    const [priceObtained, setPriceObtained]=useState(props.price);
    const [invRecs, setInvRecs] = useState([]);
    const invCollectionRef = collection(db, "inventory");



    function handleDecrease(){

        const docRef = doc(db, "inventory", props.id);

        // Set the "capital" field of the city 'DC'
        updateDoc(docRef, {
        itemcost: priceObtained-1
        }).then(()=>{
            setPriceObtained(priceObtained-1);
        });
      
    }

 function handleIncrease(){

        

        const docRef = doc(db, "inventory", props.id);

        // Set the "capital" field of the city 'DC'
        updateDoc(docRef, {
        itemcost: priceObtained+1
        }).then(()=>{
            setPriceObtained(priceObtained+1);
        });


    }



    return(
        <div class="invclass w-auto h-75 p-4 mt-4 grid grid-cols-3 gap-4">
            <div>{props.name}</div>
            <div>{props.category}</div>
            <div className="ms-5 me-5">
                <span>
               
                <button onClick={handleDecrease}><img src={'images/down-arrow.png'} class="mr-2" width='10'></img></button>
                {priceObtained}
            
                <button onClick={handleIncrease}><img src={'images/up-arrow.jpg'} class="ml-2" width='10'></img></button>
                </span>

                {/* <input type="number" class="form-control" id="inputPassword" placeholder="Password" value={props.price}/> */}
            </div>
        </div>
    )
}

export default InvCard;