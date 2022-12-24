import React from "react";

const ListItems = (props) => {
  return <li className="items" key={"unique"+props.keys}>Hello the value is {props.valuex}</li>;
};
export default ListItems;