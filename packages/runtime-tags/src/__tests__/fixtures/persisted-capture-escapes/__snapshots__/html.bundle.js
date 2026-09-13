// template.marko
_shells({ a: "a;E l D ;<main><h1> </h1><a> </a></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", `a&b${input.name}<c`, void 0, $scope0_reason, 0)}</h1><a${_patch_attr($scope0_id, "b", "title", input.on ? "a\"b" : "c'd", $scope0_reason, 1)}${_patch_attr($scope0_id, "b", "data-x", input.flag && "on", $scope0_reason, 2)}>${_patch_text($scope0_id, "c", input.name, void 0, $scope0_reason, 0)}</a>${_el_resume($scope0_id, "b")}</main>`);
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
