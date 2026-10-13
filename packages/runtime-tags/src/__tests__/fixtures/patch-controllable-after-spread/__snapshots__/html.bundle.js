// template.marko
_shells({ a: "a !a1 a2; ;<input>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_input_value($scope0_id, "a", input.v, _resume(function(next) {
		document.body.dataset.v = next;
	}, "a0"), "n2a", $scope0_reason, 1, "dEa", $scope0_reason, 1)}${_patch_attrs_partial(input.attrs, {
		value: 1,
		valueChange: 1
	}, "a", $scope0_id, "input", void 0, $scope0_reason, 0)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	$scope0_page && _scope($scope0_id, {});
}, 1);
