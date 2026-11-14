// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.bar) {
				_scope_id();
				_set_scope_reason(0);
				Foo.content({ message: input.bar });
				return 0;
			} else {
				_scope_id();
				_html(_escape(JSON.stringify(input.message)));
				return 1;
			}
		}, $scope1_id, "a", 0, 0);
	}, $scope0_id) };
	Foo.content({ bar: "hi" });
}, 1);
