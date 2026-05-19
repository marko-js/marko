// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = {};
	_dynamic_tag($scope0_id, "#text/0", Foo, {}, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<div>Foo Fallback</div>");
	}, $scope0_id), 0, 0);
	const Bar = {};
	_dynamic_tag($scope0_id, "#text/1", Bar, {}, _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<div>Bar Fallback</div>");
	}, $scope0_id), 0, 0);
	const Baz = { content: _content("__tests__/template.marko_3_content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("<div>Baz Content</div>");
	}) };
	Baz.content({});
}, 1);
