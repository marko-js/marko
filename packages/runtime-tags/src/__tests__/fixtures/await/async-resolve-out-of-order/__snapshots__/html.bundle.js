// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_await($scope0_id, "a", resolveAfter("b", 2), (value) => {
		_scope_id();
		_html(_escape(value));
	}, 0);
	_html("c");
	_await($scope0_id, "b", resolveAfter("d", 1), (value) => {
		_scope_id();
		_html(_escape(value));
	}, 0);
	_html("e");
}, 1);
