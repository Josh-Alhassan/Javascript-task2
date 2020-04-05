const data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3}
];

function interestCalculator(interestData) {
    if (data.principal >= 2500 && data.time > 1 && time < 3) {
        rate = 3;
    }else if (data.principal >= 2500 && data.time >= 3) {
        rate = 3;
    } else if (data.principal < 2500 || data.time <= 1) {
        rate = 2;
    } else {
        rate = 1;
    }

    interestData = (data.principal * rate * data.time) / 100;
    console.log(interestData);
    
    return interestData;

};

interestCalculator(data);
