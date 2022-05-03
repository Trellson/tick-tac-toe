import React from 'react'
import '../App.css'

export default function Box({value, chooseBox}){
    return(
        <div className="box" onClick={chooseBox}>
            {value}
        </div>
    )
}