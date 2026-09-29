// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("b");
	}, void 0, (error) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("ERROR!");
	}, void 0, "__tests__/template.marko_2*content");
	_html("c");
}, 1);
