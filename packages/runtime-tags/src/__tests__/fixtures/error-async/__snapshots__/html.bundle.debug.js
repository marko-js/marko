// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_await($scope0_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), () => {
		const $scope1_id = _scope_id();
		_html("failed");
	}, 0);
	_html("b");
}, 1);
