// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const arrA = [
		1,
		2,
		3
	];
	_html("<div>");
	forOf(arrA, (val) => {
		_scope_id();
		_html(`<div>${_escape(val)}</div>`);
	});
	_html("</div><div>");
	forOf(arrA, (val) => {
		_scope_id();
		_html(`<div>${_escape(val)}</div>`);
	});
	_html("<div></div></div>");
}, 1);
