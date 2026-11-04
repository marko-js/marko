// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("a1", ({ show }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				({ content: _content("a0", () => {
					_scope_id();
					_scope_reason();
					Foo.content({});
				}, $scope2_id) }).content({});
				return 0;
			}
		}, $scope1_id, "a", 0, 0);
		_html(" foo");
	}, $scope0_id) };
	Foo.content({ show: true });
}, 1);
