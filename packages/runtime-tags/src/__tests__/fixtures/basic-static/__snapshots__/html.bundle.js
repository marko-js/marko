// template.marko
const x = 1;
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div><span>${_escape(x)}</span></div>`);
}, 1);
