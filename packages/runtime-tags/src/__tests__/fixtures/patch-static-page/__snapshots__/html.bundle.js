// template.marko
_shells({ a: "a !a0,<h1>Hello</h1>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$global();
	_html("<h1>Hello</h1>");
	_script($scope0_id, "a0", 0);
}, 1);
