import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import AppTitle from './components/accordion/accordion/AppTitle';
import Rating from './components/accordion/Rating';
import Star from './components/accordion/Star';

function App() {
    return (
    <div>


    
        <AppTitle/>
        Article 1
        <Rating value ={3}/>
        <Accordion/>
        Article2 
        <Rating value = {4}/>
        <Star/>




    </div>
    )
}



export default App;
