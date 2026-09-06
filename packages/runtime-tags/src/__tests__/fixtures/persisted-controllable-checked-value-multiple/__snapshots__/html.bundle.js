// template.marko
_shells({ a: "a !a2;D b lD ;<fieldset><input type=checkbox class=a><input type=checkbox class=b></fieldset><p> </p>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = "";
	_html(`<fieldset><input${_attr_input_checkedValue($scope0_id, "a", input.picked, _resume(function(next) {
		last = next.join(",");
	}, "a0", $scope0_id), "a")}${_patch_bind($scope0_id, "Ea", _resume(function(next) {
		last = next.join(",");
	}, "a0", $scope0_id), 0, 0)}${_patch_control($scope0_id, "a", 1, [input.picked, "a"], $scope0_owned, 0)} type=checkbox class=a>${_el_resume($scope0_id, "a")}<input${_attr_input_checkedValue($scope0_id, "b", input.picked, _resume(function(next) {
		last = next.join(",");
	}, "a1", $scope0_id), "b")}${_patch_bind($scope0_id, "Eb", _resume(function(next) {
		last = next.join(",");
	}, "a1", $scope0_id), 0, 0)}${_patch_control($scope0_id, "b", 1, [input.picked, "b"], $scope0_owned, 0)} type=checkbox class=b>${_el_resume($scope0_id, "b")}</fieldset><p>${_text_resume($scope0_id, "c", last)}</p>`);
	_script($scope0_id, "a2");
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
