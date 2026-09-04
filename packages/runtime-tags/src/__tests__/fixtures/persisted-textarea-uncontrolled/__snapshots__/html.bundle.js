// template.marko
_shells({ a: "a; ;<textarea></textarea>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea${_patch_control($scope0_id, "a", 2, `[AB]${input.name}[!]`, $scope0_owned, 0)}>${_textarea_value(`[AB]${input.name}[!]`)}</textarea>${_el_resume($scope0_id, "a")}`);
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
