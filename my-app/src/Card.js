import React from "react";

const Card = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          
        //   className="card-container"
          return (
            <div className="d-flex justify-content-center">
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElem.id}</span>
                    <span className="card-author subtle"> {curElem.category}</span>
                    <h2 className="card-title"> {curElem.itemname} </h2>
                    <span className="card-description subtle">

                    </span>
                    {/* <div className="card-read"></div> */}
                    <hr></hr>
                  </div>
                  {/* <img src={image} alt="images" className="card-media" /> */}

                  <span className="card-tag  subtle">Add to Cart</span>
                  <h2 className="card-title"> {curElem.itemcost} </h2>
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