import React from "react";
import {Component} from "react";



class Form extends Component{
    constructor() {
        super();
        this.state={
            username:'',
            password:'',
            posts:[],
        }
    }

    usernameHandler = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    passwordHandler = (event) =>{
        this.setState({
            password: event.target.value
        })
    }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then( data => this.setState({posts:data}))
    // }

    render(){
        const {posts} = this.state
        return(
            <div className={"container"}>

                <input type={"text"}
                       value={this.state.username}
                       placeholder={"Enter your username"}
                       className={"form-control"}
                        onChange={this.usernameHandler} />

                <input type={"password"}
                       value={this.state.password}
                       placeholder={"Enter your Password"}
                       className={"form-control"}
                        onChange={this.passwordHandler}/>
                <button className={"btn btn-primary"}>Click Me</button>

                {posts.map(posts => <div >
                    <h2 key={posts.id}> {posts.title} </h2>
                </div>
                )}

            </div>
        )
    }

}

export default Form
