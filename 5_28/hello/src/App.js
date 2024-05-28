// 특정 파일을 블러오는 코드
// import logo from './logo.svg';
// import './App.css';
import { Fragment } from "react";
const name = '123';
// javascript XML
function App() {
  return (
   <Fragment>
    {name === '리액트' ? (
      <h1>리액트입니다</h1>
    ) : (
      <h1>리액트가 아닙니다</h1>
    )}
   </Fragment>
  );
}

export default App;
