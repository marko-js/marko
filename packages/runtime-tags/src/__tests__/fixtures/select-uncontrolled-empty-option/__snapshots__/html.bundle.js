// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<select><option${_attr_option_value("a")}>A</option><option${_attr_option_value("")}>None</option></select>`);
}, 1);
