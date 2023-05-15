// interface Person {
//     name: string;
//     age: number;
// }


type Person1 = {
    name: string;
    age: number;
}

var test1: Person1 ={
    name: '테스트',
    age: 30
}

type MyString = string;
let str: MyString = 'hello';

type Todo = {id:string; title:string; done:boolean};

function getTodo(todo: Todo){

}