// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const wrap = false;
	_dynamic_tag($scope0_id, "#text/0", wrap && "section", {}, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<span>content</span>");
	}, $scope0_id), 0, 0);
}, 1);
