import React, { useState } from "react";
import Star from "./Star";

type RatingPropsType = {
    
    
}
function UncontrolledRating (props: RatingPropsType) {
    console.log("Rating rendering")

    let [value, setValue] = useState (4)
     return (
        <div>
        <Star selected={value > 0} /> <button onClick={ () => { setValue (1)}}>1</button>
        <Star selected={value > 1} /> <button onClick={ () => { setValue (1)}}>2</button> 
        <Star selected={value > 2} />  <button onClick={ () => { setValue (1)}}>3</button>
        <Star selected={value > 3} /> <button onClick={ () => { setValue (1)}}>4</button>
        <Star selected={value > 4} /> <button onClick={ () => { setValue (1)}}>5</button>

    </div>
     )


   


}






export default UncontrolledRating;