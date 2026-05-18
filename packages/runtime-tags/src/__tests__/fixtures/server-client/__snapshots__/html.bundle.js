// template.marko
const server_x = 1;
var client_x;
const x = typeof server_x === "undefined" ? client_x : server_x;
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div><span>${_escape(x)}</span></div>`);
}, 1);
