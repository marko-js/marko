exports.render = function(input, out) {
	out.write('Hello ' + input.name + '!');
	if (input.renderBody) {
		out.write(' BODY: ');
		input.renderBody(out);
	}
};