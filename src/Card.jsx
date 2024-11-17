import React from "react";
import chroma from "chroma-js";
import './Card.css';

export default function Card({ value, index, isBack, onClick, date, name, story, imgClass }) {

    return (
        <div style={{"--content-text": `"${date}"`}} className={`card ${isBack ? 'flip' : ''} ${imgClass}`} onClick={onClick}>
    <div className="card-content">
        {story[index][0].split('\n').map((line, i) => (<p key={i}>{line}</p>))}
    </div>
</div>
    );
}
