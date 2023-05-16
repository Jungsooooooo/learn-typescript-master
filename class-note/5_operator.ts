function logMessage(value:string){
    console.log(value);
}

logMessage("hi");
// logMessage(100) 에러

function logMessage2(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }

    if(typeof value === 'string'){
        value.toString();
    }

    throw new TypeError("value must be string or number");
}

logMessage2("hi");
logMessage2(100);


interface Developer {
    name:string;
    skill:string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone:Developer | Person){
    // 유니언
    // someone에는 name만 사용할 수 있다 
    // -> 공통된 속성에만 접근 할 수 있음.
    someone.name;
}

askSomeone({name: '디벨로퍼',skill:'웹 개발'});
askSomeone({name: '나',age:31});
// 보통 유니언 객체를 더 많이 씀


function askSomeone2(someone:Developer & Person){
    // 인터섹션
    0// 모든 속성 사용 할 수 있음.
    someone.skill;
    someone.age;
}

askSomeone2({name:"e",skill:'2',age:3}) // 세개 다 넘겨야 함.

