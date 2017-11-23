exports.render = function (input, out) {

	var text = 'Hello ' + input.name + '!';

	if (input.adult === true) {
		text += ' (adult)';
	} else if (input.adult === false) {
		text += ' (child)';
	}

	if (input.renderBody) {
		text += ' BODY: ';
	}

	if (out.write) {
		out.write(text);
	} else {
		out.text(text);
	}

	if (input.renderBody) {
		input.renderBody(out);
	}
};