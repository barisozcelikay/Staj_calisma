import React from 'react'
import  './Yazi.css';
import Button from '@material-ui/core/Button';


function Yazi({kelime}) {
    return (
        <div>
            <ul>
            <li><Button size="large" className="button" href = "https://www.turksat.com.tr/tr" target = "_blank">{kelime}</Button></li>
            </ul>
            
        </div>
    )
}
export default Yazi
