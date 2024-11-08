import React, {useState} from 'react';
import Card from './Card';
import './App.css';

export default function App() {
  const itemNum = 24;
  const item = Array.from({length: itemNum}, (_, index) => itemNum - index -1);
  return (
    <div className="App">
      <h1>Advent calendar</h1>
     <div className='container'>
     {item.map((value) => (<Card key={value} value={value}/>))}
     </div>
    </div>
  );
}