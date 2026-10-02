// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const used = _id();
	_html(`<label${_attr("for", used)}>name</label><input${_attr("id", used)}>`);
}, 1);
