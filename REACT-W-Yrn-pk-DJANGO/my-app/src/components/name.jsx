import React from "react";
import {Component} from "react";

class Name extends Component {
    constructor() {
        super();
        this.state={
            name:"shaarawy"

        }
    }
    click = () => {
       this.setState({
           // name:'CHANGED TEXT'
           name: this.state.name === "shaarawy" ? "mohamed": "shaarawy"
       })
    }
    render(){
        return (
            <div>
                <h1 className={"bg-primary text-white text-center"}>{this.state.name}</h1>
            <button onClick={this.click} className={"btn btn-success"}> Button</button>
            </div>
        )
    }
}

export default Name
