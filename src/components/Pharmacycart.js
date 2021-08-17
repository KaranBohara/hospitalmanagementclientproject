import React from 'react';
import './pharmacycart.css';
import cart from './images/medicalcart.png'
export default function Pharmacycart()
{
    return(
        <div className="backgroundCartBox">
        <div className="cartbox">
        <div className="noitems"><div className="noitemstext">No items in the Cart</div>
        <input type="button" name="ecart" id="ecart" value="Add medicines"></input>
        </div>
        <img src={cart}></img>
    </div>
    </div>
    );
}