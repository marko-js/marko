// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_await(_scope_id(), "a", input.value, () => {
		_scope_id();
		_html("Resolved with no value binding");
	}, 0);
}, 1);
