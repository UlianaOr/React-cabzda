
import React from "react";

type StartPropsType = {
    selected : boolean
}

function Star (props: StartPropsType ) {
    console.log ("Star rendering")
    if (props. selected === true) {
        return <span> <b> star </b> </span>
    } else {
        return <span>  star  </span>
    }
        
    
}

    





    export default Star; 