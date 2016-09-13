import React from "react";

export default class StatePage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            user: {
                name: 'ken',
                age: 28,
                gender: 'man',
                job: 'web develop',
                'ismarried': false,
                friends: [
                    {id: 1, name: 'kenFriends1'},
                    {id: 2, name: 'kenFriends2'},
                    {id: 3, name: 'kenFriends3'},
                    {id: 4, name: 'kenFriends4'}
                ]
            }
        }
    }
    
    render(){
        return (
            <section>
                <h2>{this.state.user.name} 的个人资料</h2>
                <p>姓名：{this.state.user.name}</p>
                <p>年龄：{this.state.user.age}</p>
                <p>性别：{this.state.user.gender}</p>
                <p>工作：{this.state.user.job}</p>
                <p>婚否：{this.state.user.ismarried ? '已婚' : '未婚'}</p>
                <p>好友：
                    <ul>
                        {
                            this.state.user.friends.map((friend) => {
                                return (
                                    <li key={friend.id}>{friend.name}</li>
                                );
                            })
                        }
                    </ul>
                </p>
            </section>
        );
    }
}