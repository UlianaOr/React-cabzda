import { type } from "os";
import React from 'react';


type PropsType = { 
    on: boolean
}

const onStyle = {
    widht: "30px",
    height: "20px",
    display: "inline-block",
    border: "1px solid black",
    padding: "2px"
};
const offStyle = {
    widht: "30px",
    height: "20px",
    display: "inline-block",
    border: "1px solid black",
    marginLeft: "5px",
    padding: "2px"
};
const indicatorStyle = {
    widht: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px"
};


function OnOff (props: PropsType) {
    return <div>
        <div style={onStyle}>On</div>
        <div style={offStyle}>Off</div>
        <div style = {indicatorStyle}></div>

    </div>

}


export default OnOff;