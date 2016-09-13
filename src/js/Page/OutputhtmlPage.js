import React from "react";

export default class OutputhtmlPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            htmlStr: '<div><p>React Html Content</p></div>'  
        };
    }
    
    render(){
		return (
            <div>
                {this.state.htmlStr}
                <div dangerouslySetInnerHTML={{__html:this.state.htmlStr}}></div>
            </div>
		);
	}
}