import React from "react";

export class TodoList extends React.Component{
    state = {
        items: [
            "blue" ,
            "red",
            "black",
            "pink",
            "yellow"
        ]
    }
    

    handleInputChange = (event) => {
        const value = event.target.value 

        this.setState({
            input: event.target.value,
            newitem: value
        })
    }

    handleFormSubmit= (event) => {
        const value = event.target.value 

        this.setState({
            newitem: value
        })

        this.state.items.push(this.state.newitem)
        this.setState({
            input : ""
        })
    }
    handleListReset = () => {
        this.setState({
            items: []
        })
    }
    removeItem = (color) => {
        this.setState((state) => {
            return {
                items: state.color = state.items.filter((item) => { return item !== color })
            }

        })
    }

    render(){
        return(
            <div>
                <label>
                    Color:
                    <input 
                        name="input" 
                        value={this.state.input}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button onClick={this.handleFormSubmit} disabled={!this.state.newitem}>ADD COLOR</button>
                <button onClick={this.handleListReset}>RESET LIST</button>
                

                <div>
                    {this.props.render(this.state.items, this.removeItem)}
                </div>
            </div>
        )
    }

}