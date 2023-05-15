interface User {
    age: number;
    name: string;
    
}

// 변수에 활용한 인터페이스 
const getInterface: User ={
    age:33,
    name:'test'
}

// 함수에 인터페이스 활용

function getUser(user:User){
    console.log(user)

}

const test = {
    name: '테스트',
    age: 100
}

// getUser(test);
getUser(getInterface);

// 함수의 스펙(구조)에 인터페이스를 활용

interface SumFunction {
    (a:number, b: number):number
}

let sum : SumFunction;

sum= function(a: number, b: number){
    return a+b;
}


//인덱싱
interface StringArray {
    [index: number]:string;
}

let arr: StringArray = ['a','b','c'];
// arr[0] = '10';

// 딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp;
}

let obj :StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile:/\.js$/,
}

Object.keys(obj).forEach(function(value){});

// 인터페이스 확장

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language:string;
}

let showExtension :Developer = {
    name: '개발자',
    age: 31,
    language:'ts'
}