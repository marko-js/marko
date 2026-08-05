// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "a")}</h1><input${_attr_input_value($scope0_id, "b", input.value)}${_patch_control($scope0_id, "b", 2, input.value)}>${_el_resume($scope0_id, "b")}</main>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1);
