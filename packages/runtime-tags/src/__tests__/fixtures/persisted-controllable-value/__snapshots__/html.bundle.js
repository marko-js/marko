// template.marko
_shells({ a: "a;E l ;<main><h1> </h1><input></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1><input${_attr_input_value($scope0_id, "b", input.value)}${_patch_control($scope0_id, "b", 2, input.value, $scope0_reason, 1)}>${_el_resume($scope0_id, "b")}</main>`);
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
