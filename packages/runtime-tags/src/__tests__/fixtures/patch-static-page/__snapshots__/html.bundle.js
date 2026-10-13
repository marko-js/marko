// template.marko
_shells({ a: "a !a1,<h1>Hello</h1>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	$global();
	_html("<h1>Hello</h1>");
	_fill_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a1", 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
