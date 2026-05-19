// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_await($scope0_id, "#text/0", resolveAfter("b", 2), (value) => {
		const $scope1_id = _scope_id();
		_html(_escape(value));
	}, 0);
	_html("c");
	_await($scope0_id, "#text/1", resolveAfter("d", 1), (value) => {
		const $scope2_id = _scope_id();
		_html(_escape(value));
	}, 0);
	_html("e");
}, 1);
