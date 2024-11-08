import React from "react";
import './Card.css';

export default function Card ({value}) {
    const waitingText = 'nap van még karácsonyig';
    const finalText = 'Boldog karácsonyt!';

    return (
        <div className="card card-front card-back">{value > 0 ? value : ' '} {value > 0 ? waitingText : finalText}</div>
    )
}