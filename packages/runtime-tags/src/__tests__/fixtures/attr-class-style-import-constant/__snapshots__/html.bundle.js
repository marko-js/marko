// template.marko
const $class = _attr_class("on");
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div${$class}></div>`);
}, 1);
