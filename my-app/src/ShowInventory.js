import React from "react";
import InvCard from './InvCard';

function ShowInventory() {
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
        <InvCard/>
        <InvCard/>
        
      </div>
      <button type="button" class="btn " style={{backgroundColor: 'rgb(79, 90, 132)', color:'white'}}>Add Item</button>
      
      
    </div>
    
  );
}

export default ShowInventory;
