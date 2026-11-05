// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const x = $global().x;
	_html(`<div><span>${_escape(x)}</span></div>`);
}, 1);
