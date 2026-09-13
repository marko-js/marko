// template.marko
const $template = "<textarea></textarea>";
const $walks = " b";
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<textarea></textarea>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea${_patch_control($scope0_id, "#textarea/0", 2, `[AB]${input.name}[!]`, $scope0_owned, 0)}>${_textarea_value(`[AB]${input.name}[!]`)}</textarea>${_el_resume($scope0_id, "#textarea/0")}`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
