// template.marko
_shells({ a: "a !a0 a1;D ;<main><div>x</div></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><div${_patch_attrs(input.attrs, "a", $scope0_id, "div", void 0, $scope0_reason, 0)}>x</div>${_el_resume($scope0_id, "a")}</main>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
