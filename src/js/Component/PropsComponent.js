import React from "react";
export default class PropsComponent extends React.Component {
	render(){
		return (
            <div>
                <section>
                    <h2>{this.props.user.name} 的个人资料</h2>
                    <p>姓名：{this.props.user.name}</p>
                    <p>年龄：{this.props.user.age}</p>
                    <p>性别：{this.props.user.gender}</p>
                    <p>工作：{this.props.user.job}</p>
                    <p>婚否：{this.props.user.ismarried ? '已婚' : '未婚'}</p>
                    <p>好友：
                        <ul>
                            {
                                this.props.user.friends.map((friend) => {
                                    return (
                                        <li key={friend.id}>{friend.name}</li>
                                    );
                                })
                            }
                        </ul>
                    </p>
                </section>
                
                <hr />
                
                <section>
                    <h2>{this.props.name} 的个人资料</h2>
                    <p>姓名：{this.props.name}</p>
                    <p>年龄：{this.props.age}</p>
                    <p>性别：{this.props.gender}</p>
                    <p>工作：{this.props.job}</p>
                    <p>婚否：{this.props.ismarried ? '已婚' : '未婚'}</p>
                    <p>好友：
                        <ul>
                            {
                                this.props.friends && this.props.friends.length ? 
                                    this.props.friends.map((friend) => {
                                        return (
                                            <li key={friend.id}>{friend.name}</li>
                                        );
                                    })
                                : this.props.name + '木有朋友' 
                            }
                        </ul>
                    </p>
                </section>
            </div>
		);
	}
}

PropsComponent.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
};

PropsComponent.defaultProps = {
    ismarried: true
};