const palindromes = function (input) {
    input = input.toLowerCase().replace(/[^a-z0-9]/g,"")
    input.split("").join("");
    const reverse = input.split("").reverse().join("");
    console.log("Input: " + input +" Reversed: " + reverse)
    return reverse == input;
};

// Do not edit below this line
module.exports = palindromes;
