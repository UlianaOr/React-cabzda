import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import PageTitle from './components/accordion/accordion/AppTitle';
import Rating from './components/accordion/Rating';
import Star from './components/accordion/Star';

function App() {
    return (
    <div>


        
        <PageTitle title = {"Отобразить текст внутри!"}/>
        Article 1
        <Rating value ={3}/>
        <Accordion titleValue = {"Menu"}/>
        <Accordion title = {"Users"}/>
        Article2 
        <Rating value = {0}/>
        <Rating value = {1}/>
        <Rating value = {2}/>
        <Rating value = {3}/>
        <Rating value = {4}/>
        <Rating value = {5}/>
        <Star/>




    </div>
    )
}



export default App;
