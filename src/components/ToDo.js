import React from "react";
import App from "../App";
import { useState } from 'react';

const ToDo = (props)=>{

const [box, setBox] = useState("");



    return(
        <div>
            <div className="list">
                    <h3 className={box ? "listitem":""}>{props.name}</h3>
                <form action="">
                    <input type="checkbox" onChange={(event)=>{setBox({...box,[event.target.name]: event.target.type==="checkbox"? event.target.checked : event.target.value})}}/>
                    <input onClick={props.onDelete} type="button" value="delete" placeholder="delete" />
                </form>
            </div>
        </div>
    )
}

export default ToDo