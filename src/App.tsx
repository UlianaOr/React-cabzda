import React from 'react';
import './App.css';

import Rating from './components/accordion/UncontrolledRating';
import Star from './components/accordion/Star';
import  UncontrolledAccordion from './components/accordion/UncontrolledAccordion'
import UncontrolledRating from './components/accordion/UncontrolledRating';



function App(props: any) {

    console.log ("App rendering")
    return (
    <div>

        <UncontrolledAccordion titleValue ={Menu}/>
        


        
        
        Article 1
        <UncontrolledRating />



        {/*<Accordion titleValue = {"Menu"} collapsed ={true}/>
        <Accordion titleValue = {"Users"} collapsed = {false}/>
    Article2 
          
        <PageTitle title = {"Отобразить текст внутри!"}/>
        
        <Rating value = {0}/>
        <Rating value = {1}/>
        <Rating value = {2}/>
        <Rating value = {3}/>
        <Rating value = {4}/>
        <Rating value = {5}/>
    <Star selected= {false}/>*/}




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

