const sumAll = function(integer1, integer2) {
    if (!Number.isInteger(integer1) || !Number.isInteger(integer2)  || integer1 < 0 || integer2 < 0) {
        return "ERROR";
    }

    let smallNumber = integer1, bigNumber = integer2;
    if (integer1 > integer2) {
        smallNumber = integer2;
        bigNumber = integer1;
    } 

    let result = 0;
    while (smallNumber <= bigNumber) {
        result += smallNumber;
        smallNumber++;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
