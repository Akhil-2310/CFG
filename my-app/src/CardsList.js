import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi.js";
import Card from "./Card";
import NavBarCards from "./NavBarCards";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <div style={{backgroundColor: 'rgb(243, 244, 246)'}}>
      <NavBarCards filterItem={filterItem} menuList={menuList} />
      <Card menuData={menuData} />
    </div>
  );
};

export default Resturant;