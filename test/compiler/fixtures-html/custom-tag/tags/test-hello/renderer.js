exports.render = function (input, out) {
	out.write('Hello ' + input.name + '!');
	if (input.adult === true) {
		out.write(' (adult)');
	} else if (input.adult === false) {
		out.write(' (child)');
	}

	if (input.renderBody) {
		out.write(' BODY: ');
		input.renderBody(out);
	}
};