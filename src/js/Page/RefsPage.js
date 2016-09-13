import React from "react";

export default class RefsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '请输入姓名'
        };
    }
    
    inputChange(){
        console.log(this.refs.name.value);
        this.setState({
            name: this.refs.name.value
        });
    }
    
    render(){
		return (
            <div>
                <input type="text" onChange={this.inputChange.bind(this)} ref="name" />
                <p>{this.state.name}</p>
            </div>
		);
	}
}