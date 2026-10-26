// template.marko
_shells({ a: "a; ;<textarea></textarea>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<textarea>${_patch_textarea_value($scope0_id, "a", `[AB]${input.name}[!]`, void 0, "n2a", $scope0_reason, 0)}</textarea>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}`);
	$scope0_page && _scope($scope0_id, {});
}, 1);
