import React from "react";

function InvCard(props){
    return(
        <div class="invclass w-auto h-75 p-4 mt-4 grid grid-cols-3 gap-4">
            <div>{props.name}</div>
            <div>{props.category}</div>
            <div className="ms-5 me-5">
                {/* <span>
               {props.price}
                <img src={'images/up-arrow.jpg'} width='15'></img><img src={'images/down-arrow.png'} width='15'></img>
                </span> */}

                <input type="number" class="form-control" id="inputPassword" placeholder="Password" value={props.price}/>
            </div>
        </div>
    )
}

export default InvCard;