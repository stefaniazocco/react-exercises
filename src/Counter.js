import React from "react";

export class Counter extends React.Component {
    state= {
        count : this.props.initialValue,
    }
    constructor(props){
        super(props)
        setInterval(() =>{
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementAmount,
                }
            })
        }, this.props.incrementInterval)
    }
    render(){
        return (<h1>count: {this.state.count}</h1>)
    }
}