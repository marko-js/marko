// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (input.bar) {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				Foo.content({ message: input.bar });
				return 0;
			} else {
				const $scope4_id = _scope_id();
				_html(_escape(JSON.stringify(input.message)));
				return 1;
			}
		}, $scope1_id, "#text/0", 0, 0);
	}, $scope0_id) };
	Foo.content({ bar: "hi" });
}, 1);
