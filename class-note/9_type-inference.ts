
// 타입 추론 기본 1
// mouseover 해보면 a=string b는 number -> 이런 과정을 타입 추론이라고 한다.



function getA(b=10){
    let c = 'hi';
    return b + c;
}



// 타입 추론 기본 2
interface Dropdown<T>{
    value: T
    title: string;
}

var shoppingItem: Dropdown<string> ={
    value:'hi',
    title:'hello'
}

// 타입 추론 기본 3

interface Dropdown2<T>{
    value: T
    title: string;
}
// Dropdown2의 타입도 K와 같게 됨
interface DetailedDropdown<K> extends Dropdown2<K>{
    description:string;
    tag:K;
}

var detailedItem: DetailedDropdown<string> = {
    value:'abc',
    description:'ab',
    title:'hi',
    tag:'test'
}

// Best Common Type
let arr = [1,2,3];
let arr2 = [1,2,null,"string"];
