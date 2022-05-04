// es6문법. 
// syntax 
// object shorthand assignment

let name = "jaewon"
let age = 17

let person = {
    // name : name ,
    // age : age
    name,
    age
}

//destructuring
let person2 = {
    name2 : "asdf 변경!",
    age2 : 20

}

let {name2, age2} = person2

let array = [1, 2, 3, 4]
let [a,b, ...wow] = array

// ...rest 뒤에 나머지 값을 ...뒤에 남은것들을 rest에 다 담는것이다. 

// 깊은복사 얇은 복사 차이. 
let person3 = {...person2, test:"test", name2:"winter"} // 깊은 복사 //실제로 객체를 하나 생성하는것. 완전히 새로운 객체가 생기는거지 
let person4 = person2 // 얕은 복사 //기존에 있는 객체의 주소값만 복사
// 결론 : ...는 객체를 그대로 복사해 가져온다

let person15 = person4
// person4.name2 = "바뀐값"

// person15.age2 = 99


console.log(person)
console.log(person2)
console.log(wow)

console.log(person3)
console.log(person4)
console.log(person2==person3)
console.log(person2==person4)

let aa = [1,2]
let bb = [...aa, 3]
let cc = [...aa, ...bb]
console.log(aa)
console.log(bb)
console.log(cc) 
console.log(person15)

// 삼항연산자
let person5 = { name : "fdfd" , age : 29}

console.log(person5 ? person5.age : "no person")


