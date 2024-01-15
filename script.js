function add(a,b){
    return (Math.round((a + b)*1000))/1000;
};

function subtract(a,b){
    return (Math.round((a-b)*1000))/1000;
};

function multiply(a,b){
    return (Math.round((a*b)*1000))/1000;
};

function divide(a,b){
    return (Math.round((a/b)*1000))/1000;
};

function operate (num1,operator,num2){
    switch (operator){
    case '+':
        return add(num1,num2);
    case '-':
        return subtract(num1,num2);
    case '*':
        return multiply(num1,num2);
    case '/':
        return divide(num1,num2);
}}

let result= document.querySelector(".result");
let display= document.querySelector(".display");
let btns= Array.from(document.querySelectorAll(".num,.operator,#dot"));
let operators= Array.from(document.querySelectorAll(".operator"))
let numbers= Array.from(document.querySelectorAll(".num"));
let dotSign= document.querySelector("#dot");
let equalBtn= document.querySelector(".equal");
let deleteBtn= document.querySelector("#delete");
let clearBtn= document.querySelector("#clear");
let operator=''
let storedNum='';
let firstNum='';
let secondNum='';

numbers.forEach((num)=>{
    num.addEventListener('click',()=>{
        storedNum +=num.value;
        result.textContent=storedNum
})})

operators.forEach((item)=>{
    item.addEventListener('click',()=>{
        if (firstNum !==''){
            secondNum=operate(parseFloat(firstNum),operator,parseFloat(storedNum));
            console.log(secondNum);
            storedNum=secondNum;   
        }
        operator=item.value;
        firstNum= storedNum;
        display.textContent=firstNum+ ' '+ operator
        storedNum=''
        result.textContent=''
    })
})

equalBtn.addEventListener('click',()=>{
    secondNum=operate(parseFloat(firstNum),operator,parseFloat(storedNum));
    result.style.cssText='font-size: 45px';
    result.textContent=secondNum
    display.textContent=firstNum+ ' '+ operator + ' ' + storedNum +' = ' ;
})

dotSign.addEventListener('click',()=>{
    if (storedNum===''){
        storedNum='0';
        storedNum += '.'
    } else {
        storedNum +='.';
        result.textContent += '.'
    }
    dotSign.disabled=true
})

deleteBtn.addEventListener('click',()=>{
    result.textContent=result.textContent.slice(0,-1)
    storedNum=storedNum.slice(0,-1);
})

clearBtn.addEventListener('click',()=>{
    result.textContent=0;
    display.textContent='';
     storedNum='';
    firstNum='';
    secondNum='';
    content=''
    dotSign.disabled=false;
})






















// let firstNum='';
// let storedNum='';
// let previousNum='';


// digits.forEach((btn) => {
//     btn.addEventListener('click',()=> {
//         storedNum += btn.textContent;
//         if (firstNum==''){
//         display.textContent=storedNum;
//         } else {
//             operate(firstNum,operator,storedNum)
//         }
         
//         // } else {
//         //     display.textContent=firstNum + ' '+ operator + ' '+ storedNum
//         //     result.textContent=operate(parseFloat(firstNum), parseFloat(operator), parseFloat(storedNum))
//         // }
//     })
//  });

//  operators.forEach((item)=>{
//     item.addEventListener('click', ()=>{
//         firstNum= storedNum;
//         operator= item.textContent;
//         previousNum = firstNum + ' '+ operator;
//         display.textContent=previousNum
//         storedNum=''
//     })
//  })
