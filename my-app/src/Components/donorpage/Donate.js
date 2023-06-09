import { React, useState } from "react";
import "./donate.css";
import { useNavigate } from "react-router-dom";

function Donate(props) {
  console.log(props);
  const navigate = useNavigate();
  const gonext = () => {
    navigate("/listitems");
  };

  // const [detailsObj, setDetailsObj] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  // });

  function handleChange(event) {
    const { name, value } = event.target;
    props.setDetailsObj((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

  }

  const customStyle={
    "overflow-y": "hidden"
  }
  return (
    <div style={customStyle}>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 float-right">
            <div className="float-right">
              {/* <div  ><img className="object-cover object-center rounded" alt="hero" src="logo1.jpeg"/></div> */}
              {/* <!-- <div ><h1 className="title-font font-medium text-3xl text-gray-900">Bangalore Food Bank</h1></div> --> */}
            </div>
            {/* <!-- <p className="leading-relaxed mt-4">We aim to eradicate hunger at the basic level. Through our efforts, we want to ensure that the voices of the malnourished and the hungry in India are heard and their needs are satisfied. We also want to raise awareness amongst people that a lot of food that is potentially getting wasted can be used to feed the many hungry stomachs in Bangalore.</p> --> */}
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                name="name"
                value={props.detailsObj.name}
                onChange={handleChange}
                type="text"
                id="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                name="email"
                value={props.detailsObj.email}
                onChange={handleChange}
                type="email"
                id="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Contact Number
              </label>
              <input
                name="phone"
                value={props.detailsObj.phone}
                onChange={handleChange}
                type="text"
                id="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={() => gonext()}
            >
              Donate :)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Donate;
