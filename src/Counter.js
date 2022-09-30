import React from "react";
import { CounterDisplay } from "./CounterDisplay";

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
        return (<CounterDisplay displayCount= {this.state.count}/>)
    }
}