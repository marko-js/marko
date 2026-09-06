// template.marko
_shells({ a: "a !a1; ;<input>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value, _resume(function(next) {}, "a0"))}${_patch_bind($scope0_id, "Ea", _resume(function(next) {}, "a0"), 0, 0)}${_patch_control($scope0_id, "a", 2, input.value, $scope0_owned, 1)}${_patch_attr($scope0_id, "a", "type", input.kind, $scope0_owned, 0)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
