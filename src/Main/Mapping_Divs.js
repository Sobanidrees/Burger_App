import React from "react";
import "./div.css";
export default function Mapping_Divs(props) {
  return (
    <div className="divCont">
      {props.Lettuce.map((i) => {
        return i;
      })}
      {props.Bacon.map((i) => {
        return i;
      })}

      {props.Cheese.map((i) => {
        return i;
      })}
      {props.Meat.map((i) => {
        return i;
      })}
    </div>
  );
}
