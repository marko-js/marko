// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<select><button><selectedcontent></selectedcontent></button><option${_attr_option_value("one")}>One</option><option${_attr_option_value("two")}>Two</option></select>`);
}, 1);
