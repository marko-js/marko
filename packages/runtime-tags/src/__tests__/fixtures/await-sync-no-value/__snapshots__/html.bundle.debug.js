// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.value, () => {
		const $scope1_id = _scope_id();
		_html("Resolved with no value binding");
	}, 0);
}, 1);
