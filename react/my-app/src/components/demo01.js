import React, {Component} from 'react';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ]

class UserList extends Component {
    render(){
        let {user} = this.props
        return(
            <div >
                <div >姓名：{user.username}</div>
                <div >年龄：{user.age}</div>
                <div >性别：{user.gender}</div>
                <hr />
            </div>
        )
    }
}
  
class Header1 extends Component {
    static defaultProps = {
        avc : "aaa"
    }
    handler(e){
        console.log(e)
        console.log(this)
        console.log("click")
    }

    render(){
        return(
            <div>
                <h1 onClick = {this.handler.bind(this)}>测试</h1>
                {/* {users.map((user,i)=>
                      <div  key={i}>
                        <div >姓名：{user.username}</div>
                        <div >年龄：{user.age}</div>
                        <div >性别：{user.gender}</div>
                        <hr />
                    </div>
                )} */}
                {users.map((user,i) => 
                    <UserList user = {user} key={i}/>
                )}
            </div>
        )
    }
}

class LikeButton extends Component{
    constructor(){
        super()
        this.state = { isLiked :false}
    }

    handleOnClick(){
        this.setState({
            isLiked : !this.state.isLiked
        })
        this.setState((prevState)=>{
            console.log(prevState)
        })
    }
    render(){
        return(
            <button onClick = {this.handleOnClick.bind(this)}>
                {this.state.isLiked ? "取消" : "点赞"}
            </button>
        )
    }
}

class Demo01 extends Component {

    render() {

        return (
            <div>
                <LikeButton/>
                <Header1/>
                <div className = "c1"
               >
                
                Hello, 我是在src / Components目录下的C1.js文件中的C1组件 我引入了相同目录下的 C1.css 文件， 用来给我包含的文字设为红色 
                {new Date().toLocaleString()} 
                </div>
            </div>
        );

    }

}



export default Demo01;