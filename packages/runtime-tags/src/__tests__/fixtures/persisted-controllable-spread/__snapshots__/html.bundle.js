// template.marko
_shells({ a: "a !a1 a2; bD ;<input><p> </p>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let value = "a";
	_html(`<input${_attr_input_value($scope0_id, "a", value, _resume(function(v) {
		value = v;
	}, "a0", $scope0_id))}${_patch_bind($scope0_id, "Ea", _resume(function(v) {
		value = v;
	}, "a0", $scope0_id), 0, 0)}${_patch_attrs_partial(input.attrs, {
		value: 1,
		valueChange: 1
	}, "a", $scope0_id, "input", void 0, $scope0_owned, 0)}>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "b", value)}</p>`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	$scope0_reason && _scope($scope0_id, { e: input.attrs });
}, 1, 0);
