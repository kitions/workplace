import React, {Component} from "react"
import PropTypes from "prop-types"

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
    constructor(){
        super()
        this.state = {
            username:'',
            content:''
        }
    }

    handleUserNameChange (e) {
        this.setState({
          username: e.target.value
        })
    }
    handleTextAreaChange (e) {
        this.setState({
            content: e.target.value
        })
    }
    handleUsernameBlur(e){
      localStorage.setItem('username',e.target.value)
    }
    click(){

        if(this.props.onSubmit){
            // const { username, content } = this.state
            this.props.onSubmit({
              username:this.state.username,
              content:this.state.content,
              createdTime:new Date()
            })
        }
        this.setState({content:""})
    }

    // 声明周期，dom加载完毕
    componentDidMount(){
      this.textarea.focus()
    }
    // 即将加载时
    componentWillMount(){
      this._loadUsername()
    }
    _loadUsername(){
      const username = localStorage.getItem('username')
      if(username){
        this.setState({username})
      }
    }

    render() {
      return (
        <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input 
            value={this.state.username}
            onBlur={this.handleUsernameBlur.bind(this)}
            onChange={this.handleUserNameChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea 
            value={this.state.content}
            ref={(textareaFoucs) => this.textarea = textareaFoucs}
            onChange={this.handleTextAreaChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick = {this.click.bind(this)}>
            发布
          </button>
        </div>
      </div>
      )
    }
  }
  
  export default CommentInput