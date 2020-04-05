const data = [{ principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 },
];

let rate = 0;
let interest = 0;
let interestData = [];

function interestCalculator(array) {
    array.forEach((item) => {
        if (item.principal >= 2500 && item.time > 1 && item.time < 3)
            rate = 3;
        else if (item.principal >= 2500 && item.time >= 3)
            rate = 4;
        else if (item.principal < 2500 || item.time <= 1)
            rate = 2;
        else
            rate = 1;
        interest = (item.principal * rate * item.time) / 100;
        interestData.push({
            principal: item.principal,
            time: item.time,
            rate,
            interest
        });
    });
    console.log(interestData);
    return interestData;
};
interestCalculator(data);