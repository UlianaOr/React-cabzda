import React from 'react';
import './App.css';

function App() {
    return (
    <div>
        <Accordion/>




    </div>
    )
}

function Accordion () {
    console.log ("Accordion rendering")
    return (
        <>
        <h3>Menu</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        </>
    )
}

export default App;
