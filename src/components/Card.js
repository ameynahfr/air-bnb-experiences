import React from "react"
import star from './star.png'
export default function Card(props) {

    let badgeText;
    if(props.openSpots===0){
        badgeText = "SOLD OUT"
    }
    else if(props.location==='Online'){
        badgeText = "ONLINE"
    }
    
    return(
        <div>
            <figure className="card">
                
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img id="card--image" src={props.coverImg} alt="profile" />
                <figcaption><img id="star" src={star} alt="rating"/> 
                {props.rating} ({props.reviewCount}) • {props.location}
                <br/>{props.title}<br/><b>From ${props.price} / person</b>
                </figcaption>
            </figure>
        </div>
    )
}

/*      id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "katie-zaferes.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,*/