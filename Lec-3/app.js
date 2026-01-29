// function jodna(){ //Non-Parameterized
//     let n1 = 10;
//     let n2 = 20;
//     console.log(n1+n2);
// }
// jodna();
// function jodna(num1, num2){ //Parameterized
//     let n1 = num1;
//     let n2 = num2;
//     console.log(n1+n2);
// }
// jodna(25, 35);
// function jodna(num1, num2, num3){ //Parameterized
//     let n1 = num1;
//     let n2 = num2;
//     let n3 = num3;
//     console.log(n1+n2+n3);
// }
// jodna(25, 35);

// function jodna(num1, num2, num3=10){ //Default-Parameterized
//     let n1 = num1;
//     let n2 = num2;
//     let n3 = num3;
//     // console.log(n1+n2+n3);
//     return n1+n2+n3;
// } 
// console.log(jodna(25, 35));
// jodna(25, 35, 40);


// const res =  ()=>{
//     let n1 = 10;
//     let n2 = 25;
//     return n1 + n2;
// }

// console.log(res());


// var res = ()=>{ //Arrow function
//     let naam = "GLA University";
//     return naam;
// }
// console.log(res());



// let person = {
//     naam:"Abhishek Kumar",
//     city:"Mathura",

//     greet(){
//         return `Hi! I am ${this.naam}`;
//     }
// }

// console.log(person.naam.trim());
// console.log(person.city.toUpperCase());
// console.log(person.greet());



let count = 0;
console.log(count++); //count = count + 1
console.log(count);

// // ++count; // count = count + 1
// console.log(count); //count = count + 1


let count2 = 0;
console.log(++count2);
console.log(count2);