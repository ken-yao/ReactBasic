import React from "react";

function getRandom(a , b , toFixNum){
  if(!toFixNum){
    return Math.round(Math.random()*(b-a)+a);
  }else{
    var n = Math.random()*(b-a)+a;
    return Number(n.toFixed(toFixNum));
  }
}

export default class StatePage extends React.Component{
    constructor(props){
        super(props);
                
        this.state = {
            bgColorArray: ['darkcyan','blueviolet','dodgerblue','firebrick', 'tomato'],
            currentStyle: 'darkcyan'
        }
    }
    
    changeStyle(){
        var index = getRandom(0, this.state.bgColorArray.length - 1);
        this.setState({
             currentStyle: this.state.bgColorArray[index],
        });
    }
    
    render(){
        return (
            <div>
                <button onClick={this.changeStyle.bind(this)}>更换背景颜色</button>
                <div className={`${this.state.currentStyle} fontColor`}>
                    点击按钮更换背景颜色，现在的背景颜色是{this.state.currentStyle}
                </div>
            </div>
        );
    }
}