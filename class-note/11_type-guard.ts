interface Developer{
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age:33, skill:'Iron Making'};
}

let tony = introduce();
console.log(tony.name); 

if((tony as Developer).skill){
    let skill = (tony as Developer).skill;

} else if ((tony as Person).age){

    let age = (tony as Person).age;

}

function isDeveloper(target: Developer | Person): target is Developer {
    return(target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){
    tony.skill
} else { 
    tony.age
}