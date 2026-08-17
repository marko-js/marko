// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1><input${_attr_input_value($scope0_id, "#input/1", input.value)}${_patch_control($scope0_id, "#input/1", 2, input.value, $scope0_owned, 1)}>${_el_resume($scope0_id, "#input/1")}</main>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
