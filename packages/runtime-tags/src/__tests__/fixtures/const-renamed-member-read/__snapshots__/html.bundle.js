// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div>${_escape({ n: 1 }.n)}</div><div>${_escape({ n: 2 }.n)}</div>`);
}, 1);
