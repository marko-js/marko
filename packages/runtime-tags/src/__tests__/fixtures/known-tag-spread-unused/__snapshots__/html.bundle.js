// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("a0", (input) => {
		_scope_id();
		_scope_reason();
		_html(_escape(input.foo || "fallback"));
	}, $scope0_id) };
	({ content: _content("a1", (input) => {
		_scope_id();
		_scope_reason();
		_set_scope_reason(0);
		Foo.content(input);
	}, $scope0_id) }).content({});
}, 1);
