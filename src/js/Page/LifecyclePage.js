import React from "react";
import LifecycleComponent from '../Component/LifecycleComponent';

export default class LifecyclePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0,
            propnum: 0
        };
        console.log('父组件初始化：' + this.state.num);
    }
    
    handleNumClick(){
        this.setState({
            num: this.state.num + 1
        })
    }
    
    handlePropNumClick(){
        this.setState({
            propnum: this.state.propnum + 1
        })
    }
    
    componentWillMount(){
        console.log('这是父组件 componentWillMount 阶段.' + this.state.num);
    }
    
    componentDidMount(){
        console.log('这是父组件 componentDidMount 阶段.' + this.state.num);
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log('这是父组件 shouldComponentUpdate 阶段：' + nextState.num);
        return true;
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log('这是父组件 componentWillUpdate 阶段：' + nextState.num);
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('这是父组件 componentDidUpdate 阶段：' + prevState.num);
    }
    
    componentWillUnmount(){
        console.log('这是父组件 componentWillUnmount 阶段.');
    }
    
    render(){
		return (
            <div>
                <h2>组件生命周期</h2>
                <div>
                <button onClick={this.handleNumClick.bind(this)}>加1</button> <span>{this.state.num}</span>
                </div>
                <div>
                <button onClick={this.handlePropNumClick.bind(this)}>加1</button> <span>{this.state.propnum}</span>
                </div>
                <LifecycleComponent num={this.state.propnum} />
            </div>
		);
	}
}