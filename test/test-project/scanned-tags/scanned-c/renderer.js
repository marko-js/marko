module.exports = function render(input, context) {
    context.write('scanned-c: Hello ' + input.NAME);
};