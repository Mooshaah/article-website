import React from "react";
import {Component} from "react";



class Example2 extends Component{
    myElements(names){
    return(
        names.map(
            names => <div key={names}>
                {`${names}`}
            </div>
        )
    )
}
    render(){
        return(
             <div>
          <h3>
              {this.myElements(this.props.names)}
          </h3>
      </div>
        )
    }

}

export default Example2
