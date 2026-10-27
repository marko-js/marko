// template.marko
_shells({ a: "a; D ;<a> </a>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<a${_attr("href", input.href, $scope0_id, "a", $scope0_reason, 0)}${_attr("title", input.title, $scope0_id, "a", $scope0_reason, 1)}${_attr("hidden", input.hidden, $scope0_id, "a", $scope0_reason, 2)}>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 3)}</a>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 1) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
}, 1);
