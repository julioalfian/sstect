import React, { useState } from "react";

export const Star = () => {
    const [star, setStar] = useState([
        {
            name:'*',
            active: false,
        },
        {
            name:'*',
            active: false,
        },
        {
            name:'*',
            active: false,
        },
        {
            name:'*',
            active: false,
        },
        {
            name:'*',
            active: false,
        },
    ])

    const handleClick = (index) => {
        let newState = {
          name: '*',
          active: !star[index].active
        }
        let allState = star.map((item, id) => {
          if(id === index)
            return newState
            else
                return item
        })
        setStar(allState)
      }
    
    return(
        <>
            <h1>Change Class</h1>
            <div>
                {
                    star.map((item, index) => {
                    return(
                        <span key={index} onClick={() => handleClick(index)} className={item.active ? 'active' : ''}>{item.name}</span>
                    )
                    })
                    
                }
            </div>
        </>
    )
}