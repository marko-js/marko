// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const E = { content: _content("__tests__/template.marko_1*content", ({ depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (depth > 0) {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				E.content({ depth: depth - 1 });
				return 0;
			}
		}, $scope1_id, "#text/0", 0, 0);
	}, $scope0_id) };
	E.content({ depth: 2 });
}, 1);
