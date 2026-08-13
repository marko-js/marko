// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_for_await(["a", "b"], (item) => {
		_scope_id();
		_html(_escape(item));
	}, 0, _scope_id(), "a", 0, 0, 0);
}, 1);
