import React from "react";
import Star from "./Star";

type RatingPropsType = {
    value : number
}
function Rating(props: RatingPropsType) {
    console.log("Rating rendering")


    if (props.value === 1)
    {
        return (
            <div>
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />

            </div>
        )
    }

    if (props.value === 2) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />

            </div>
        )
    }

    if (props.value === 3) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />

            </div>
        )
    }

    if (props.value === 4) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />

            </div>
        )
    }

    if (props.value === 5) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />

            </div>
        )
    }


    return (
        <div>
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />

        </div>
    )



}






export default Rating;