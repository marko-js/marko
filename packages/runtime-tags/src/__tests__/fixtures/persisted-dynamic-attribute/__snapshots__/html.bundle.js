// template.marko
_shells({ a: "a; D ;<a> </a>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "a", "href", input.href, $scope0_reason, 0)}${_patch_attr($scope0_id, "a", "title", input.title, $scope0_reason, 1)}${_patch_attr($scope0_id, "a", "hidden", input.hidden, $scope0_reason, 2)}>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 3)}</a>${_el_resume($scope0_id, "a")}`);
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
