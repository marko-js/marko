module.exports = function render(input, context) {
    context.write('scanned-a: Hello ' + input.name);
};