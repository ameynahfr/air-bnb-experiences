import React from "react";
import mail from "./mail-icon.png";
import phone from "./phone-icon.png";


export default function Contact(props) {
    return(
        <div className="contact-card">
        <img alt="display" src={props.img} />
        <h3>{props.name}</h3>
        <div className="info-group">
            <img src={phone} alt="phone"/>
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img src={mail} alt="mail"/>
            <p>{props.email}</p>
        </div>
    </div>
    )


}