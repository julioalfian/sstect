import React, { useState } from "react";

export const Order = (props) => {
    const [stateOder, setStateOrder] = useState(props.data)
    
    const handleClick = (item, index) => {
        let removeFormOrder = [] 
        stateOder.map(el => {
            if(el !== item)
                return removeFormOrder.push(el)
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
                            <li key={index} onClick={() => handleClick(item, index)} >{item}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}