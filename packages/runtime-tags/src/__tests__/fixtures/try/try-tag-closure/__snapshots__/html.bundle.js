// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const value = "Hello";
	_try($scope0_id, "a", () => {
		_scope_reason();
		_scope_id();
		_html(_escape(value));
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("error");
	}, void 0, "a0");
}, 1);
