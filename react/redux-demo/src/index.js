// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const appState = {
    title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
}

function stateChanger(state, action){
    if(!state){
        return{
            title: {
                text: 'React.js 小书',
                color: 'red',
              },
              content: {
                text: 'React.js 小书内容',
                color: 'blue'
              }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return{
                ...state, // 构建新的对象并返回
                title:{
                    ...state.title,
                    text:action.text
                }
                
            }
        case 'UPDATE_TITLE_COLOR':
            return{
                ...state,  // 构建新的对象并返回
                title:{
                    ...state.title,
                    color: action.color
                }
            }
        default:
          return state // 没有修改，返回原来的对象
      }
}

const store = createStore(appState , stateChanger)
let oldState = store.getState()

function createStore(state , stateChanger){
    const listeners = [];
    const subscribe = (listener)=> listeners.push(listener)
    const getState = ()=> state
    const dispatch = (action) => {
        state = stateChanger(state , action)
        console.log(state)
        listeners.forEach((listener) => listener())
    }
    return {getState , dispatch, subscribe}
}


function renderApp(store, oldStore = {}){
    if(store === oldStore) return
    console.log("renderApp")
    renderTitle(store.title, oldStore.title)
    renderContent(store.content, oldStore.content)
}
function renderTitle(title, oldTitle={}){
    if(title === oldTitle) return
    console.log("renderTitle")
    const titleDom = document.getElementById("title")
    titleDom.innerHTML = title.text
    titleDom.style.color = title.color
}
function renderContent (content, oldContent={}) {
    if(content === oldContent) return
    console.log("renderContent")
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}
store.subscribe(()=>{
    let newStore = store.getState()
    renderApp(newStore, oldState)
    oldState = newStore
})

renderApp(store.getState() , oldState)
store.dispatch({type:"UPDATE_TITLE_TEXT", text:"1hello wo111rld1"})
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'yellow' }) // 修改标题颜色
