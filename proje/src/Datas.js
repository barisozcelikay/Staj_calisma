import React from 'react'
import "./Datas.css"
import { CircularProgress } from '@material-ui/core';
function Datas({datas,number,color}) {
    return (
        <div>
            <ul>
                <li><CircularProgress className = "circle" color = {"red"} size = "100px"  variant="static" value={number} /></li>
                
            </ul>
           
            </div>
        
    )
}

export default Datas
