// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const value = "Hello";
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_escape(value));
	}, void 0, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("error");
	}, void 0, "__tests__/template.marko_2*content");
}, 1);
