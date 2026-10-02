// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	let z = {
		x: 1,
		y: 2
	};
	_html(`<div>${_escape(z.x)}</div>${_escape(z.y)}`);
}, 1);
