// template.marko
_shells({ a: "a; ;<!---->" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<!--${_patch_text_content($scope0_id, "ma", input.title, _escape_comment, $scope0_reason, 0) || " "}-->${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}`);
	$scope0_page && _scope($scope0_id, {});
}, 1);
