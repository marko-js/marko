// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.value, () => {
		_scope_id();
		_html("Resolved with no value binding");
	}, 0);
}, 1);
