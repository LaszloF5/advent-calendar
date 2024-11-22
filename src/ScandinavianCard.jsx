import React from "react";
import './ScandinavianCard.css';

export default function Card({ value, index, isBack, onClick, date, name, story2, scandinavianImgClass }) {
    return (
        <div style={{"--content-text": `"${date}."` }} className={`scard ${isBack ? 'flip' : ''} ${scandinavianImgClass}`} onClick={onClick}>
    <div className="card-content">
        {story2[index][0].split('\n').map((line, i) => (<p key={i}>{line}</p>))}
    </div>
</div>
    );
}
