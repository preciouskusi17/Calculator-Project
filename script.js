function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a-b;
};

function multiply(a,b){
    return a*b;
};

function divide(a,b){
    return (Math.round((a/b)*100))/100;
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
let content=''

btns.forEach((digit)=>{
    digit.addEventListener('click',()=>{
        content += digit.textContent
        display.textContent = content
    })
})
dotSign.addEventListener('click',()=>{
    if (storedNum===''){
        storedNum='0';
        storedNum += '.'
    } 
    dotSign.disabled=true
})

deleteBtn.addEventListener('click',()=>{
    content -= digit.textContent
    display.textContent = content
})

numbers.forEach((num)=>{
    num.addEventListener('click',()=>{
        storedNum +=num.value;
        console.log(storedNum)
        if (firstNum !==''){
            secondNum=operate(parseFloat(firstNum),operator,parseFloat(storedNum));
            console.log(secondNum);
            storedNum=secondNum;
            
        }
    })
})

operators.forEach((item)=>{
    item.addEventListener('click',()=>{
    operator=item.value;
    firstNum= storedNum;
    storedNum=''
    })
})

equalBtn.addEventListener('click',()=>{
    result.textContent=secondNum
})

clearBtn.addEventListener('click',()=>{
    result.textContent='';
    display.textContent=0;
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
