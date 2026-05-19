// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forOf(["foo"], (foo) => {
		_scope_id();
		_scope_id();
		_html(_escape(foo));
	});
}, 1);
