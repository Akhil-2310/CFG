import React, { useEffect, useState } from "react";
import DonCard from "./DonCard";
import {
    getDocs,
    collection,
    addDoc,
    updateDoc,
    doc,
} from "firebase/firestore";
import { db } from "./firebase";
//import Showform from "./form";
//import { Link, Routes, Route } from "react-router-dom";

function ShowDonors() {
    const [activatedInput, changeActivation] = useState(false);
    const [newcor, setnewcor] = useState(false);
    const [newname, setnewname] = useState("");
    const [newphone, setnewphone] = useState("");
    const [newemail, setnewemail] = useState("");
    const [docRecs, setdocRecs] = useState([]);
    const invCollectionRef = collection(db, "donors");

    useEffect(() => {

        const getdocRecs = async () => {
            const data = await getDocs(invCollectionRef);
            setdocRecs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(data);
        };
        getdocRecs();
    }, []);

    return (
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                    Donors List
                </h1>

                <table class="table-auto w-full text-left whitespace-no-wrap mt-10">
                    <thead>
                        <tr class="grid grid-cols-3 gap-4">
                            <th class=" d-flex justify-content-center px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                Name
                            </th>
                            <th class="  d-flex justify-content-center px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                email id
                            </th>
                            <th class=" d-flex justify-content-center px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                Phone number
                            </th>
                        </tr>
                    </thead>
                </table>
                {docRecs.map((users, index) => {
                    return (
                        <DonCard
                            key={index}
                            name={users.name}
                            email={users.email}
                            phone={users.phone}
                        ></DonCard>
                    );
                })}
            </div>
        </div>
    );
}

export default ShowDonors;
