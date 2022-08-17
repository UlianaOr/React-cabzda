import { type } from "os";
import React from 'react';


type PropsType = { 
    on: boolean
}

const onStyle = {};
const offStyle = {};
const indicatorStyle = {
    widht: "30px",
    height: "30px",
    borderRadius: "15px",
    border: "1px solid black"
};


function OnOff (props: PropsType) {
    return <div>
        <div></div>
        <div></div>
        <div style = {indicatorStyle}></div>

    </div>

}


export default OnOff;