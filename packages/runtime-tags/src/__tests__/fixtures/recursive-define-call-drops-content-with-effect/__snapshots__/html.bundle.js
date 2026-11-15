// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const E = { content: _content("a0", ({ depth }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (depth > 0) {
				_scope_id();
				_set_scope_reason(0);
				E.content({ depth: depth - 1 });
				return 0;
			}
		}, $scope1_id, "a", 0, 0);
	}, $scope0_id) };
	E.content({ depth: 2 });
}, 1);
