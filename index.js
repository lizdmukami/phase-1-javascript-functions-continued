function saturdayFun(watch = 'roller-skate'){
    return `This Saturday, I want to ${watch}!`;
    }
    saturdayFun();

const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`;
}
mondayWork();

function wrapAdjective(superb ="*" ) {
    return function (param = "special") {
      const encouragingPromptFunction = wrapAdjective("!!!")
            return `You are ${superb}${param}${superb}!`;
    }
}
console.log(wrapAdjective("%")("a dedicated programmer"));
