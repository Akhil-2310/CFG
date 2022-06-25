import React from "react";
import { useNavigate } from 'react-router-dom'



const Card = ({ menuData }) => {
  
    const navigate = useNavigate()
    const gotocart=()=>{
      navigate('/cart')
    }
  //   console.log(menuData);

  return (
    
    <>
    <div className=" ">
     <button className="btn btn-lg btn-success m-2" onClick={()=>gotocart()}>Go to Cart</button></div>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          
        //   className="card-container"
          return (
            <div className="d-flex justify-content-center">
             
              <div className="card-container" key={curElem.id}>
                <div className="card h-100">
                  <div className="card-body">
                    {/* <span className="card-number card-circle subtle">{curElem.id}</span> */}
                    <span className="card-author subtle "> {curElem.category}</span>
                    <h2 className="card-title "> {curElem.itemname} </h2>
                    <span className="card-description subtle">

                    </span>
                    {/* <div className="card-read"></div> */}
                    <hr></hr>
                  </div>
                   {/* <img src="https://www.ndtv.com/health/bananas-health-benefits-know-why-experts-recommend-eating-this-fruit-every-day-2337290" alt="images" className="card-media" />  */}
                  <div className="float-left">
                    <div className="mx-5 d-flex lead mt-2 pt-2"><p className="mt-3">Kgs:</p><input type="number" className="form-control w-50 ms-2 me-2 my-2"></input>
                  {/* <span className="card-tag  subtle ">Add to Cart</span> </div> */}
                  <button className="btn btn-lg btn-primary my-2" >Add to Cart</button>
                  </div>
                  </div>
                  <h4 className="card-title"  style={{fontSize: 35}}> Rs.{curElem.itemcost} </h4>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Card