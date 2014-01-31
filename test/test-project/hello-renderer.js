exports.render = function(input, context) {
	context.write('Hello ' + input.name + '!');
};