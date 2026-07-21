// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<textarea>${_textarea_value("hello")}</textarea>`);
}, 1);
