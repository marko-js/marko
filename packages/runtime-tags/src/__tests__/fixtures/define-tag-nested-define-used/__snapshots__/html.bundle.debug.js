// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Outer = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const Inner = { content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html("<span>inner</span>");
		}, $scope1_id) };
		_html("<div>");
		Inner.content({});
		_html("</div>");
	}, $scope0_id) };
	Outer.content({});
}, 1);
