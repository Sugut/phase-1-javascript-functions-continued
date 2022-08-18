// code your solution here

function saturdayFun(work = "roller-skate") {
    return `This Saturday, I want to ${work}!`;
}
    

function mondayWork(fun ="go to the office"){
    return `This Monday, I will ${fun}.`
}

let wrapAdjective= function(msg1="*"){
    return function (adjective = "special"){
        return( `You are ${msg1}${adjective}${msg1}!`);
    }
}    
wrapAdjective("%")("a dedicated programmer!");