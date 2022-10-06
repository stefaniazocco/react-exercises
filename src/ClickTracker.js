import React from "react";

export class ClickTracker extends React.Component {
    state= {
        name : "",
    }
    trackEvent = (event) =>{
        this.setState(() =>{
            return {
                name : event.target.name
            }
        })
        
    }
    render(){
        return (<>    
            <h1>You clicked the {this.state.name} button</h1>
            <button name="first" onClick={this.trackEvent}>ONE</button>
            <button name="second" onClick={this.trackEvent}>TWO</button>
            <button name="third" onClick={this.trackEvent}>THREE</button>
        </>)
    }
}