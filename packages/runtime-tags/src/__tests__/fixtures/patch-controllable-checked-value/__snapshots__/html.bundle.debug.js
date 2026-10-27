// template.marko
const $template = "<fieldset><input type=radio class=a><input type=radio class=b></fieldset><p> </p>";
const $walks = "D b lD l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b lD ;<fieldset><input type=radio class=a><input type=radio class=b></fieldset><p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let note = "";
	_html(`<fieldset><input${_patch_input_checkedValue($scope0_id, "#input/0", input.picked, _resume(function(next) {
		note = next;
	}, "__tests__/template.marko_0/checkedValueChange", $scope0_id), "a", "PatchControl:1#input/0", $scope0_reason, 0, "PatchWrite:ControlledHandler:#input/0", $scope0_reason, 0)} type=radio class=a>${_el_resume($scope0_id, "#input/0")}<input${_patch_input_checkedValue($scope0_id, "#input/1", input.picked, _resume(function(next) {
		note = next;
	}, "__tests__/template.marko_0/checkedValueChange2", $scope0_id), "b", "PatchControl:1#input/1", $scope0_reason, 0, "PatchWrite:ControlledHandler:#input/1", $scope0_reason, 0)} type=radio class=b>${_el_resume($scope0_id, "#input/1")}</fieldset><p>${_text_resume($scope0_id, "#text/2", note)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#input/0": ["checkedValueChange", "3:51"],
		"ControlledHandler:#input/1": ["checkedValueChange", "4:51"]
	});
}, 1);
