import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import Rating from './components/accordion/Rating';
import Star from './components/accordion/Star';
import OnOff from './components/accordion/accordion/OnOff';


function App(props: any) {

    console.log ("App rendering")
    return (
    <div>
        <OnOff on= {false}/>


        
        <PageTitle title = {"Отобразить текст внутри!"}/>
        Article 1
        <Rating value ={3}/>
        <Accordion titleValue = {"Menu"} collapsed ={true}/>
        <Accordion titleValue = {"Users"} collapsed = {false}/>
    Article2 
        <Rating value = {0}/>
        <Rating value = {1}/>
        <Rating value = {2}/>
        <Rating value = {3}/>
        <Rating value = {4}/>
        <Rating value = {5}/>
    <Star selected= {false}/>




    </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle (props: PageTitlePropsType) { 
    console.log ("PageRendering")
    return <h1>{props.title}</h1>

}

export default App;

