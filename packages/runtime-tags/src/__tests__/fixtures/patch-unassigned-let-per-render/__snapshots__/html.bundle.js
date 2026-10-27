// template.marko
let n = 0;
_shells({ a: "a !; D l ;<label> </label><input>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let uid = "u" + ++n;
	_html(`<label${_patch_attr($scope0_id, "aa$for", "for", `${uid}-${input.name}`, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_patch_input_value($scope0_id, "c", input.value, void 0, "n2c", $scope0_reason, 2)}${_patch_attr($scope0_id, "ac$id", "id", `${uid}-${input.name}`, $scope0_reason, 0)}${_patch_attr($scope0_id, "ac$name", "name", input.name, $scope0_reason, 0)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 2) || _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, { i: _unfilled_if($scope0_reason, 0) && uid }) || _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va0", uid);
}, 1);
