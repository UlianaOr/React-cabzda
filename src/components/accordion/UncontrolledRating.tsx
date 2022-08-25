import React, { useState } from "react";
import Star from "./Star";

type RatingPropsType = {
    value : number
}
function UncontrolledRating (props: RatingPropsType) {
    console.log("Rating rendering")

    let [value, setValue] = useState (0)
     return (
        <div>
        <Star selected={value > 0} />
        <Star selected={value > 1} />
        <Star selected={value > 2} />
        <Star selected={value > 3} />
        <Star selected={value > 4} />

    </div>
     )


   


}






export default UncontrolledRating;