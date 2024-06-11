import logo from './logo.svg';
import './App.css';
import{Component} from 'react'
import{Mycomponent} from './Mycomponent.js'

function App() {
  return <Mycomponent>리액트</Mycomponent>;
}

// 클래스형 컴포넌트
class App extends Component{
  render() {
    const name = 'react';
    return <div className='react'>{name}</div>
  }
}

export default App;