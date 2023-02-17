import React from "react";

export default function Box(props) {
    let num = props.num;
    const increase = () => {
        num = num + 1;
        console.log(props.name,"->",num);
    }
    
    return(
        <div className="box">
            {props.num} <br />
            {props.name}
            <button onClick={increase}>증가</button>
        </div>
    )
}