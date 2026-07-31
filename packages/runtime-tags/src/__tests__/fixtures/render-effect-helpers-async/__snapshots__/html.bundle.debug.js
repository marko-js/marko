// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	template_default$1({});
	_await($scope0_id, "#text/1", resolveAfter(0, 1), (_) => {
		const $scope1_id = _scope_id();
		_html("ready");
	}, 0);
}, 1);
