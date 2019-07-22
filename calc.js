const math = require('mathjs');

module.exports = {
    add: function (x, y) {
        return math.add(x,y);
    },
    subtract: function (x, y) {
        return math.subtract(x,y);
    },
    multiply: function (x, y) {
        return math.multiply(x,y);
    },
    divide: function (x, y) {
        return math.divide(x,y);
    },
    abs: function (x) {
        return math.abs(x);
    }
}