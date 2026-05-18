// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", {}, {}, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<div>Foo Fallback</div>");
	}, $scope0_id), 0, 0);
	_dynamic_tag($scope0_id, "b", {}, {}, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("<div>Bar Fallback</div>");
	}, $scope0_id), 0, 0);
	({ content: _content("a2", () => {
		_scope_id();
		_scope_reason();
		_html("<div>Baz Content</div>");
	}) }).content({});
}, 1);
