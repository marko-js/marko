// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_await(_scope_id(), "a", $global().value, (unused) => {
		_scope_id();
		_html("Resolved without reading the value");
	}, 0);
}, 1);
