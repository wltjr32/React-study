// setTimeout(() =>{
//     console.log('1초 후에 실행됩니다.')
// }, i * 1000);

// let count = 0;
// setInterval(() =>{
//     console.log(`1초마다 실행됩니다.(${count}번째 시행)`);
//     count++
// }, 1 * 1000);

// let id
// let count2 = 0
// id = setInterval(() => {
//     console.log(`1초마다 실행됩니다2(${count2}번째)`);
//     count2++   
// }, 1 * 1000);

// setTimeout(() => {
//     console.log(`타이머를 종료합니다.`);
//     clearInterval(id);
// }, 5 * 1000);

// let pi = 3.14
// console.log(`main.js의 pi는${pi}`);
// function sample() {
//     let pi = 3.141592
//     console.log(`test.js의 pi는 ${pi} 입니다.`)
// }
// sample();
// (function () {
//     let pi = 3.141592
//     console.log(`test.js의 pi는 ${pi} 입니다`);
// }) ()

//엄격 모드
// 'use strict'
// data = 10;
// console.log(data);

//객체란 "실제로 존재하는 사물"을 의미하고 "이름"과 "값으로 구성된 JS 기본 데이터 타입"

console.log (typeof([]));
const array = ['사과','바나나', '감'];
// 배열에는 인덱스, 요소가 있다
// 요소에 접근할 때 array[0], array[1], array[2]

const product = {
    제품명 : "건조 망고",
    유형 : "건조 식품",
    성분 : "망고, 설탕, 색소",
    원산지 : "필리핀"
}
//product['제품명'], product['유형'], product['원산지']
// 리액트에서는 단순히 웹디자인만 하는게 아니다
// 리액트의 핵심은 데이터를 어떻게 가공해서 보여주고 어떻게 저장할것이냐
// 데이터베이스를 얼마나 잘 사용할수 있느냐
// 데이터베이스의 정보를 객체에서 저장하기 때문에
// 개체에 있는 메소드를 활용해서 데이터베이스의 정보를 외부로 보요준다

const pet = {
    name : "코코",
    eat : function (food) {
        alert(this.name+ '은/는'+food+'을/를 먹습니다.')
    }
}

pet.eat(밥);
//코코는 밥을 먹습니다

pet.나이 = '2';
pet.종 = '고양이';
console.log(JSON.stringify(pet, null, 2));

delete pet.나이;
console.log(JSON.stringify(pet, null, 2));