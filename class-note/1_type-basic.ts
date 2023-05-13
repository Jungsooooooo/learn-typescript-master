// str이라는 변수는 string이다.
const str: string = "hello";

// str이라는 변수는 number이다.
let num: number = 10;

// 변수 타입에 따른 배열
let arr: Array<number> = [1, 2, 3];
let hreos: Array<string> = ["hi", "hi"];
let items: number[] = [1, 2, 3];
let arrString: string[] = ["test", "test"];

// 튜플 - 배열 순서대로 넣으면 됨
let address: [string, number] = ["seoul", 1019];

// TS 객체

let obj: object = {};

let person: { name: string; age: number } = {
  name: "I",
  age: 31,
};

//진위값

let show: boolean = true;
