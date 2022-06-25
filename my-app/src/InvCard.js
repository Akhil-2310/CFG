import React from "react";

function InvCard(props){
    // console.log(props);
    return(
        <div class="invclass w-auto h-75 p-4 mt-4 grid grid-cols-3 gap-4">
            <div>{props.name}</div>
            <div>{props.category}</div>
            <div>{props.price}</div>
        </div>
    )
}

export default InvCard;