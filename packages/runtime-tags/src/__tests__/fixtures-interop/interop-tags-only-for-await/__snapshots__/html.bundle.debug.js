// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_for_await(["a", "b"], (item) => {
		const $scope1_id = _scope_id();
		_html(_escape(item));
	}, 0, $scope0_id, "#text/0", 0, 0, 0);
}, 1);
