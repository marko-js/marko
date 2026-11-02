// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("__tests__/template.marko_1*content", ({ show }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				const Bar = { content: _content("__tests__/template.marko_3*content", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					Foo.content({});
				}, $scope2_id) };
				Bar.content({});
				return 0;
			}
		}, $scope1_id, "#text/0", 0, 0);
		_html(" foo");
	}, $scope0_id) };
	Foo.content({ show: true });
}, 1);
