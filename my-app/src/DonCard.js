import React from "react";

function DonCard(props) {
    return (
        <div class="invclass w-auto h-75 p-4 mt-4 grid grid-cols-3 gap-4">
            <div>{props.name}</div>
            <div>{props.email}</div>
            <div>{props.phone}</div>
        </div>
    )
}

export default DonCard;