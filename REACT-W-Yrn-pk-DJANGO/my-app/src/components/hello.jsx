import React from "react";



function Hello(props) {
    function On_click(){
        alert("BUTTON IS CLICKED");

    }
    return(
        <div>
            <h1> my name is :{props.name} </h1>
            <button className={'btn btn-success'} onClick={On_click}> click me</button>
        </div>
    )
}

export default Hello;
