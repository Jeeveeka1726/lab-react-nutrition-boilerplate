import React, { useState } from "react";

function Foodbox(props) {

    let {ele,index}=props
    let {img,name,cal}=ele

    const [input,setInput]=useState(0);
    const [quantity,setQuantity]=useState(0)

    function quantityHandler(){
        setQuantity(input)
    }

    return(
        <>
            <div className="divider">
                <div id="grey-divider" className="divider">
                    <div>
                        <img src={img} alt="itempic" />
                    </div>
                    <div className="words">
                        <span id="name">{name}</span>
                        <span>{cal}</span>
                    </div>
                    <div className="quantityHandler">
                        <input type="number" onChange={(e)=>{setInput(e.target.value)}}  placeholder="Enter a number here" />
                        <button id="plusButton" onClick={quantityHandler}>+</button>
                    </div>
                </div>
                <p id="quantity">{quantity} {name} = {cal*quantity} calories</p>
                <button id="resetButton" onClick={()=>{
                    setInput(0)
                    setQuantity(0)
                }}>Reset</button>
            </div>
        </>
    )
}

export default Foodbox