// template.marko
_shells({ a: "a !a1;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const label = _resume(() => "ready", "a0");
	_html(`<p>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, { e: label });
}, 1);
