// template.marko
const $template = "<fieldset><input type=checkbox class=a><input type=checkbox class=b></fieldset><p> </p>";
const $walks = "D b lD l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b lD ;<fieldset><input type=checkbox class=a><input type=checkbox class=b></fieldset><p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = "";
	_html(`<fieldset><input${_patch_input_checkedValue($scope0_id, "#input/0", input.picked, _resume(function(next) {
		last = next.join(",");
	}, "__tests__/template.marko_0/checkedValueChange", $scope0_id), "a", "PatchControl:1#input/0", $scope0_reason, 0, "PatchBind:ControlledHandler:#input/0", $scope0_reason, 0)} type=checkbox class=a>${_el_resume($scope0_id, "#input/0")}<input${_patch_input_checkedValue($scope0_id, "#input/1", input.picked, _resume(function(next) {
		last = next.join(",");
	}, "__tests__/template.marko_0/checkedValueChange2", $scope0_id), "b", "PatchControl:1#input/1", $scope0_reason, 0, "PatchBind:ControlledHandler:#input/1", $scope0_reason, 0)} type=checkbox class=b>${_el_resume($scope0_id, "#input/1")}</fieldset><p>${_text_resume($scope0_id, "#text/2", last)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", last, 1);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#input/0": ["checkedValueChange", "3:54"],
		"ControlledHandler:#input/1": ["checkedValueChange", "4:54"]
	});
}, 1);
