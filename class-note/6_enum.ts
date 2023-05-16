enum Shoes {
    Nike,
    Adidas
}


enum Shoes1 {
    Nike = '나이키',    // 문자열 출력도 가능
    Adidas = '아디다스'
}


let myShoes = Shoes.Nike;
console.log(myShoes); // 0 별도의 값을 지정하지 않으면 0이 나옴

let adi = Shoes.Adidas; // 1씩 증가하여 adidas는 1이 나옴


//예제
 
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if( answer === Answer.Yes){
        console.log("정답입니다");
    }

    if( answer === Answer.No){
        console.log("오답입니다");
    }

}

askQuestion(Answer.Yes);