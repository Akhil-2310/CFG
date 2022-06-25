import React from "react";

function InvCard(props){
    return(
        <div class="invclass w-auto h-75 p-4 mt-4 grid grid-cols-3 gap-4">
            <div>Rice</div>
            <div>Grains</div>
            <div className="ms-5 me-5">
                <span>
                Price 
                <img src={'images/down-arrow.png'} width='15'></img><img src={'images/up-arrow.jpg'}></img>
                </span>
            </div>
        </div>
    )
}

export default InvCard;