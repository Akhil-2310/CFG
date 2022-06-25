import React from "react";

const Card = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;
        //   className="card-container"
          return (
            <div className="d-flex justify-content-center">
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                        
                    </span>
                    {/* <div className="card-read"></div> */}
                    <hr></hr>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Add to Cart</span>
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