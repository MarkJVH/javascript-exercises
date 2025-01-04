const repeatString = function(word, num) {
    if (num < 0 ) {
        return "ERROR";
    }  else if (num == 0 || word == "") {
        return "";
    } else {
        let finalString = "";
        for (let i = 0; i < num; i++) {
            finalString += word;
        }
        return finalString;
    }
};

// Do not edit below this line
module.exports = repeatString;
