// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const x = _id();
	const y = _id();
	_html(`<div>${_escape(x)} ${_escape(y)}</div>`);
}, 1);
