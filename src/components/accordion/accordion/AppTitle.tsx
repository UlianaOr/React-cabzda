import React from "react";

type PageTitlePropsType = {
    title : string
}

function PageTitle (props: PageTitlePropsType) {
    console.log ("AppTitle rendering")
    return <>{props.title}</>
}


export default PageTitle