import React, { useState, useEffect } from "react";
import Button_list from "../footer/Button_list";
import top from "./img/top.jpeg";
import bottom from "./img/bottom.jpg";
import "./div.css";
import "./Main.css";
import Mapping_Divs from "./Mapping_Divs";
export default function Main() {
  const [Lettuce, setLettuce] = useState([]);
  const [Bacon, setBacon] = useState([]);
  const [Cheese, setCheese] = useState([]);
  const [Meat, setMeat] = useState([]);
  const [isEmpty, setisEmpty] = useState(true);
  
  //If Status is true, than button is active other wise, the button is disable
  const [items,setItems] =useState(
    {
      Lettuce:{item:"Lettuce",Status:false}, 
      Bacon:{item:"Bacon",Status:false},
      Chease:{item:"Cheese",Status:false},
      Meat:{item:"Meat",Status:false}
    }
   );




  useEffect(() => {
    if (
      Lettuce.length === 0 &&
      Bacon.length === 0 &&
      Cheese.length === 0 &&
      Meat.length === 0
    ) 
    {
      setisEmpty(true);
    } 
    else 
    {
      setisEmpty(false);
    }

    if(Lettuce.length===0)
    {
      items.Lettuce.Status=false;
    }

    if(Bacon.length===0)
    {
      items.Bacon.Status=false;
    }
    
    if(Cheese.length===0)
    {
      items.Chease.Status=false;
    }

    if(Meat.length===0)
    {
      items.Meat.Status=false;
    }
  }, [Lettuce, Bacon, Cheese, Meat]);

  const lessHandler = (item) => {
    
    if (item==="Lettuce")
    {
      if (Lettuce.length!== 0)
      {
        setLettuce(Lettuce.slice(0, -1));
      }
    } 
    else if (item === "Bacon") 
    {
      if (Bacon.length !== 0)
      {
        setBacon(Bacon.slice(0, -1));
      }
    } 
    else if (item === "Cheese") 
    {
      if (Cheese.length !== 0) 
      {
        setCheese(Cheese.slice(0, -1));
      } 
    }
    else if (item === "Meat") 
    {
      if (Meat.length !== 0) 
      {
        setMeat(Meat.slice(0, -1));
      } 
    }
  };

  const moreHandler = (item) => {
    if (item === "Lettuce") 
    {
      
      setLettuce((prev)=>{
        return [...prev,<div className="Lettuce"></div>]
      });
      items.Lettuce.Status=true;
    } 
    else if (item === "Bacon")
    {
      
      setBacon((prev)=>{
        return [...prev,<div className="Bacon"></div>]
      });
      
      items.Bacon.Status=true;
    } 
    else if (item === "Cheese") 
    {
      setCheese((prev)=>{
        return [...prev,<div className="Cheese"></div>]
      });

      items.Chease.Status=true;
    } 
    else if (item === "Meat") 
    {      
      setMeat((prev)=>{
        return [...prev,<div className="Meat"></div>]
      });

      items.Meat.Status=true;
    }
  };

  return (
    <div className="Parent">
      <div className="Main-Cointainer">
        <div className="Burger-Top">
          <img src={top} alt="error" className="top" />
        </div>
        {isEmpty ? (
          <div className="p">No Ingredients Added</div>
        ) : (
          <div className="Middle-Material">
            <Mapping_Divs
              Lettuce={Lettuce}
              Bacon={Bacon}
              Cheese={Cheese}
              Meat={Meat}
            />
          </div>
        )}

        <div className="Burger-bottom">
          <img src={bottom} alt="error" className="bottom" />
        </div>
      </div>

      <Button_list
        Addhandler={moreHandler}
        Lesshandler={lessHandler}
        items={items}

        empty={isEmpty}
      />
    </div>
  );
}
