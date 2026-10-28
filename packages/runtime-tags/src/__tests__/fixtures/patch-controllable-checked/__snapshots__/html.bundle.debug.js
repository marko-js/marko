// template.marko
const $template = "<main><h1> </h1><input type=checkbox></main>";
const $walks = "E l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><input type=checkbox></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><input${_attr_input_checked($scope0_id, "#input/1", input.agree, _resume(function(next) {
		document.querySelector("main").dataset.agree = String(next);
	}, "__tests__/template.marko_0/checkedChange"), "PatchControl:0#input/1", $scope0_reason, 1, "PatchWrite:ControlledHandler:#input/1", $scope0_reason, 1)} type=checkbox>${_el_resume($scope0_id, "#input/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#input/1": ["checkedChange", "3:46"] });
}, 1);
