import React, { useState } from "react";

export const Order = (props) => {
    const [stateOder, setStateOrder] = useState(props.data)
    
    const handleClick = (item) => {
        let removeFormOrder = [] 
        stateOder.map(el => {
            if(el !== item)
                return removeFormOrder.push(el)
            return false
        })
        let newOrder = [
            ...item,
            ...removeFormOrder
        ]
        setStateOrder(newOrder)
    }

    return(
        <>
            <h1>Change Order</h1>
            <ul>
                {
                    stateOder.map((item, index) => {
                        return(
                            <li className="cursor-pointer" key={index} onClick={() => handleClick(item)} >{item}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}