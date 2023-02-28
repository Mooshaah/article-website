import React from "react";
import {Component} from "react";


class MY_CLASS extends Component{

    render(){

        return(
            <div className="container">
                <h1 className="bg-primary text-white text-center">my email is: {this.props.email}</h1>
                <button className={'btn btn-primary'} onClick={this.props.myclick}> Click </button>
            </div>
        )
    }
}

export default MY_CLASS;
