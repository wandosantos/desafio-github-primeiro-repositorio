
//rest operator ... / Spread operator

// const multiplay = (...args)=> args.reduce((acc,value)=> acc * value,1)

// const sum =(...rest)=>{
//     return multiplay(...rest)
// }

// console.log(sum(5,5,5,2,3))


//Spread pode usado em,string,objetos e objetos literais

// const str = 'Digital Inovation One'
// function logArgs(...args){
//     console.log(args)
// }
// console.log(logArgs(...str))




// const strs = 'Digital Inovation One'
// function logArgs(){
//     console.log(arguments)
// }
// console.log(logArgs(...strs))    


//utilizando ccom Array

// const arr = [1,2,3,4]

// function arrArgs(...args){
//     console.log(args)
// }

// console.log(...arr)



// const arrs = [1,2,3,4]

// function arrArgs(a,b,c){
//     console.log(a,b,c)
// }

// console.log(...arrs)

// //forma antiga
// const arr2 = [5,6,7].concat(arr)
// console.log(arr2)


// const arr3 = [...arr,5,6,7]
// console.log(arr2)


// const arr4 = [...arr2,...arr,0,0,0]
// console.log(arr3)


//com objetos

const obj = {
    teste: 'wando'
}

const obj2 = {
    ...obj,
    teste2:123,
}

console.log(obj2)