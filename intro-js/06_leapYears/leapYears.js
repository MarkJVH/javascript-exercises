const leapYears = function(year) {
    let isCenturyYear = false;
    if (Number.isInteger(year / 100)) {
        isCenturyYear = true;
    }

    if (!isCenturyYear && year % 4 == 0) {
        return true;
    } else if (isCenturyYear && year % 400 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
