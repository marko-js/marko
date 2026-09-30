// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "a", () => {
		_scope_reason();
		_scope_id();
		_html("b");
	}, void 0, (error) => {
		_scope_reason();
		_scope_id();
		_html("ERROR!");
	}, void 0, "a0");
	_html("c");
}, 1);
