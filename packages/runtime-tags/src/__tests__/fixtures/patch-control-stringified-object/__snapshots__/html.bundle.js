// template.marko
_shells({ a: "a !a1; ;<input>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_input_value($scope0_id, "a", input.value, _resume(function() {}, "a0"), "n2a", $scope0_reason, 0, "wEa", $scope0_reason, 0)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {});
}, 1);
