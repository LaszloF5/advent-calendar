import React from "react";
import './Card.css';

export default function Card({ value, index, isBack, onClick, date, name, story }) {
    // const waitingText = `nap van még karácsonyig date: ${date}`;
    // const finalText = `Boldog karácsonyt ${name}!`;

    return (
        <div className={`card ${isBack ? 'flip' : ''}`} onClick={onClick}>
    <div className="card-content">
        {story[index][0].split('\n').map((line, i) => (<p key={i}>{line}</p>))}
    </div>
</div>
   
    );
}
