
// 호출 하는 시점에 타입을 넘겨줌.
function logText<T>(text:T):T{
    console.log(text);
    return text;
}

logText<string>('hi');
logText<number>(10);
logText<boolean>(true);

// 특정 타입을 정해두면 타입에 따라 코드를 반복적으로 사용해야 함.
function logText2(text:string){
    console.log(text);
    text.split('').reverse( ).join('');
    return text;
}

logText('a')


function logNumber(num: number){
    console.log(num);
    return num;
}

logNumber(10);


// 인터페이스에 제네릭 선언하는 방법
interface Dropdown {
    value: string;
    selected:boolean;
}

const obj: Dropdown = {value:'hi', selected:true};

interface Dropdown2<T>{
    value:T;
    selected:boolean;
}

const obj2: Dropdown2<number> = {value:1, selected:true};
const obj3: Dropdown2<string> = {value:'hi', selected:true};

// 제네릭의 타입 제한
function logTextLength<T>(text:T[]):T[]{
    //어떤 타입이 들어 올지 모르기 때문에 그저 length만 쓰면 에러가 뜸.
    //그래서 배열로 선언함.

    text.forEach(function (text){
        console.log(text)
    });

    console.log(text.length);
    return text;
}

logTextLength<string>(['hi','abc']);


