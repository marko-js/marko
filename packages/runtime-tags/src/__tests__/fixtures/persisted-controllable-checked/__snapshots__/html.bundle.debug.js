// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1><input${_attr_input_checked($scope0_id, "#input/1", input.agree, _resume(function(next) {
		document.querySelector("main").dataset.agree = String(next);
	}, "__tests__/template.marko_0/checkedChange"))}${_patch_bind($scope0_id, "ControlledHandler:#input/1", _resume(function(next) {
		document.querySelector("main").dataset.agree = String(next);
	}, "__tests__/template.marko_0/checkedChange"))}${_patch_control($scope0_id, "#input/1", 0, input.agree, $scope0_owned, 1)} type=checkbox>${_el_resume($scope0_id, "#input/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
