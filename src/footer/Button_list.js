import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Button-list.css";
export default function Button_list(props) {
  const [totalPrice, settotalPrice] = useState(3.00);
  const itemsArray=Object.entries(props.items);

  const moreHandler = (item) => {
    props.Addhandler(item);
    if (item === "Lettuce") 
    {
      settotalPrice(totalPrice + 0.5);
    } 
    else if (item === "Bacon")
    {
      settotalPrice(totalPrice + 0.7);
    }
    else if (item === "Cheese")
    {
      settotalPrice(totalPrice + 0.4);
    }
    else if (item === "Meat")
    {
      settotalPrice(totalPrice + 0.3);
    }
  };

  const lessHandler = (item) => {
    props.Lesshandler(item);
    if (item === "Lettuce" && !props.empty&&props.items.Lettuce.Status===true) 
    {
      settotalPrice(totalPrice - 0.5);
    }
    else if (item === "Bacon" && !props.empty &&props.items.Bacon.Status===true)
    {
      settotalPrice(totalPrice - 0.7);
    }
    else if (item === "Cheese" && !props.empty &&props.items.Chease.Status===true)
    {
      settotalPrice(totalPrice - 0.4);
    } 
    else if (item === "Meat" && !props.empty &&props.items.Meat.Status===true)
    {
      settotalPrice(totalPrice - 0.3);
    }
  };

  return (
    <div className="FooterCointainer">
      <p className="price">Current Price:<span className="pp">${totalPrice.toFixed(2)}</span></p>
      <div className="buttons">
        {itemsArray.map((data) => {
          return (
            <Button
              name={data[1].item}
              Addhandler={moreHandler}
              Lesshandler={lessHandler}
              key={data[1].item}
              Status={data[1].Status}
            />
          );
        })}
      </div>
      <div className="submit-button">
        <Link to="/login"><button className={props.empty ? "buttonS": "Active"}>SIGN UP TO ORDER</button></Link>
      </div>
    </div>
  );
}
