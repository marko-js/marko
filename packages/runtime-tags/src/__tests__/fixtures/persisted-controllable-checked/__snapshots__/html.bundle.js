// template.marko
_shells({ a: "a !a1;E l ;<main><h1> </h1><input type=checkbox></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h1><input${_attr_input_checked($scope0_id, "b", input.agree, _resume(function(next) {
		document.querySelector("main").dataset.agree = String(next);
	}, "a0"))}${_patch_bind($scope0_id, "Eb", _resume(function(next) {
		document.querySelector("main").dataset.agree = String(next);
	}, "a0"))}${_patch_control($scope0_id, "b", 0, input.agree, $scope0_owned, 1)} type=checkbox>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
