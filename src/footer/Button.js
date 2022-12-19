import React from 'react'
import './footer.css';
export default function Button(props) {
    const moreHandler=()=>{
        props.Addhandler(props.name);
    }
    const lessHandler=()=>{
        props.Lesshandler(props.name);
    }


  return (
    <div className='cointainer'>
      <p className='name'>{props.name}</p>
      <div className='button-div'>
        { !props.Status?
    <button disabled className="button1 deactivate">Less</button>
    :
    <button onClick={lessHandler} className="button1">Less</button>}
      <button onClick={moreHandler} className="button2">Add</button>
      </div>
    </div>
  )
}
