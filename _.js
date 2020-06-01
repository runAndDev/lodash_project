const _ = {
    clamp(number, lowerBound, upperBound) {
        if (typeof number === "number" && typeof lowerBound === "number" && typeof upperBound === "number") {
            if (number>lowerBound && number<upperBound) {
                return number;
            }
            else if (number<lowerBound) { 
                return lowerBound;
            }    
            else if (number>upperBound) { 
                return upperBound; 
            }    
        }
        else {
            return console.log("TypeError")
        }
    }
};

console.log(_.clamp(1, 2, 3))



// Do not write or modify code below this line.
module.exports = _;