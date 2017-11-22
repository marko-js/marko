module.exports = function renderer(input, out) {
    out.write('Hello ' + input.firstName);
};