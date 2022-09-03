import React, { useState } from "react"


type AccordionPropsType = {
    titleValue : string
    //collapsed : boolean
}


function UncontrolledAccordion (props:AccordionPropsType) {
    console.log ("Accordion rendering")

    let [collapsed, setCollopsed] = useState(false);

    return 
    <div>
        <AccordionTitle title= {props.titleValue} onClick = { () => {setCollopsed(!collapsed) }}/> 
       
        { !collapsed && <AccordionBody/>}
        
    </div>
}




 /*function Accordion (props: AccordionPropsType) {
    console.log ("Accordion rendering")
    return (
        <>

        <AccordionTitle title = {props.titleValue}/>
        {props.collapsed === true &&  <AccordionBody/>}
        
        </>
    )
}*/

type AccordionTitlePropsType = {
    title : string
    onClick: () => void
}


function AccordionTitle (props: AccordionTitlePropsType) {
    
    console.log ("AccordionTitle rendering")
    return (
        
        <h3 onClick={ () => {props.onClick ()}}>--{props.title}</h3>
        
        
    )
}


function AccordionBody () {
    console.log ("AccordionBody rendering")
    return (
        
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
      
    )
}


export default UncontrolledAccordion;
