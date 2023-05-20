interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
// }

class Person {
    name: string;
    skill: string;
}

let developer: Developer;
let person: Person;

// person = developer;
developer = new Person();

// 함수
let add = function(a: number){
    // ...

}

// sum의 함수 구조는 add 보다 크다 라고 표현 함.
let sum = function(a:number, b: number){

}

// add =sum;
sum = add;


// 제네릭
interface Empty<T>{

}

var empty1: Empty<string>  | undefined;
var empty2: Empty<number>  | undefined;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
    data:T
}
let notempty1: NotEmpty<string>  | undefined;
let notempty2: NotEmpty<number>  | undefined;

notempty1 = notempty2;
notempty2 = notempty1;
