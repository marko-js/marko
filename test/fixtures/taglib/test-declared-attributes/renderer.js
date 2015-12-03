module.exports = function simple(input, out) {
    var daysOld = input.age * 365;
    out.write('Hello ' + input.name + '! You are ' + daysOld + ' days old.');
};