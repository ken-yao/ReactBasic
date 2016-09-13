import React from "react";
export default class LifecycleComponent extends React.Component {
    constructor(props){
        super(props);
        
        console.log('子组件初始化：' + this.props.num);
    }
    
    componentWillMount(){
        console.log('这是子组件 componentWillMount 阶段.' + this.props.num);
    }
    
    componentDidMount(){
        console.log('这是子组件 componentDidMount 阶段.' + this.props.num);
    }
    
    componentWillReceiveProps(nextProps){
        console.log('这是子组件 componentWillRecieveProps 阶段.' + nextProps.num);
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log('这是子组件 shouldComponentUpdate 阶段：' + nextProps.num);
        return true;
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log('这是子组件 componentWillUpdate 阶段：' + nextProps.num);
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('这是子组件 componentDidUpdate 阶段：' + prevProps.num);
    }
    
    componentWillUnmount(){
        console.log('这是子组件 componentWillUnmount 阶段.');
    }
    
    render(){
        return (
            <div>
                <p>子组件{this.props.num}</p>
            </div>
        );
    }
}