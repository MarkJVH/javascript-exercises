const fibonacci = function(number) {
    if (number == 0 || number == 1) {
        return Number.parseInt(number);
    } else if (number > 1) {
        return fibonacci(number-1) + fibonacci(number-2);
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
