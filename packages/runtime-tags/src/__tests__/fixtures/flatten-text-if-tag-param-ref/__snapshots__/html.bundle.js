// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forOf([
		"a",
		"b",
		"c"
	], (item) => {
		_scope_id();
		_html(`<div>${item ? _escape(`${_to_text(item)}`) : ""}</div>`);
	});
}, 1);
