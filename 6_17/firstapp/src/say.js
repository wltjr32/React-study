//배열 비구조화 할당
// 기존 배열의 선엉 방식을 보면 const array = [1,2]; 선언한다
// 이 배열의 값을 변수에 할당하려면 const one = [0] // const two = [1] 이런식
import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState('');
    const onclickEnter = () => setMessage('안녕하세요');
    const onclickEnter = () => setMessage('안녕히가세요');

    return {}
}