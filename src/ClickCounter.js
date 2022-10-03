import React from "react";

export class ClickCounter extends React.Component {
    state= {
        count : 0,
    }
    countEvents = () => {
        this.setState((state) =>{
            return {
                count: state.count + 1
            }
        })
    }
    render(){
        return (<>    
            <h1>You clicked {this.state.count} times</h1>
            <button onClick={this.countEvents}>Click to count</button>
        </>)
    }
}