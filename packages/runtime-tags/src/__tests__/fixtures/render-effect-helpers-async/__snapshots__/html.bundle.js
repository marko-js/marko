// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	template_default$1({});
	_await($scope0_id, "b", resolveAfter(0, 1), (_) => {
		_scope_id();
		_html("ready");
	}, 0);
}, 1);
