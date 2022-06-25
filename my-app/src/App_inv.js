import { useState, useEffect } from "react";
import { db } from './firebase';
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";

function App() {
    const [newCategory, setNewCategory] = useState("");
    const [newItemName, setNewItemName] = useState("");
    const [newItemCost, setNewItemCost] = useState(0);
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "inventory");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { Category: newCategory, itemName: newItemName, itemCost: Number(newItemCost) });
    };

    /*const updateUser = async (id, Age) => {
      const userDoc = doc(db, "users", id)
      const newFields = { Age: Age + 1 }
      await updateDoc(userDoc, newFields);
    };
  */

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    return (
        <div className="App">
            <input placeholder="Category..."
                onChange={(event) => {
                    setNewCategory(event.target.value);
                }}
            />
            <input placeholder="ItemName..."
                onChange={(event) => {
                    setNewItemName(event.target.value);
                }}
            />
            <input type="Number" placeholder="ItemCost..."
                onChange={(event) => {
                    setNewItemCost(event.target.value);
                }}
            />

            <button onClick={createUser}> Create User</button>
            {users.map((user) => {
                return (
                    <div>
                        {" "}
                        <h1> Category : {user.category} </h1>
                        <h1> ItemName : {user.itemname} </h1>
                        <h1> ItemCost : {user.itemcost} </h1>
                    </div>
                );
            })}
        </div>
    );
}

export default App;