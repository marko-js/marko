// template.marko
function getAnswer() {
	return 42;
}
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div>${_escape(getAnswer())}</div>`);
}, 1);
