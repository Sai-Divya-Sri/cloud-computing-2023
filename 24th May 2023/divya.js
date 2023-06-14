//a sample line to print
console.log("good morning!!");

//sum of 2 numbers
let x=23;
let y=02;
let z=x + y;
console.log(z);

//concatination
const firstName='sai';
const secondName='divya';
console.log(firstName +' '+ secondName);

//comparison of 3 numbers using if else
let a=23;
let b=02;
let c=04;
if(a>b && a>c){
    console.log("a is greatest",a);
}else if(b>c && b>a){
    console.log("b is greatest",b);
}else{
    console.log("c is greatest",c);
}

//using switch statement
var grade='A';
var result;
switch(grade){
    case 'A':
        result="A Grade";
        break;
    case 'B':
        result="B Grade";
        break;
    case 'C':
        result="C Grade";
        break;
    default:
        result="No Grade";
}
console.log(result);

//for loop
for(let i=1;i<=5;i++){
    console.log(i);
}

//while loop
let j=12
while(j<=14){
    console.log(j);
    j++;
}

//functions
function msg() {
  console.log("welcome everyone");
}
msg();

//prg to print multiplication table
const num=6;
for(let i=1;i<=10;i++){
    const res = i * num;
    console.log(`${num} * ${i} = ${res}`);
}

