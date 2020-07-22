import React from 'react'
import  './Menu.css';
import Button from '@material-ui/core/Button';

function Menu({kelime}) {
    return (
        <div>
            <ul>
            <li><Button size="large" className="button" href = "https://www.turksat.com.tr/en" target = "_blank">{kelime}</Button></li>
            </ul>
        </div>
    )
}
export default Menu
