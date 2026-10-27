// template.marko
const $template = "<main><h1> </h1><textarea></textarea></main>";
const $walks = "E l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><textarea></textarea></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><textarea>${_patch_textarea_value($scope0_id, "#textarea/1", input.text, _resume(function(next) {
		document.querySelector("main").dataset.text = next;
	}, "__tests__/template.marko_0/valueChange"), "PatchControl:2#textarea/1", $scope0_reason, 1, "PatchWrite:ControlledHandler:#textarea/1", $scope0_reason, 1)}</textarea>${_el_resume($scope0_id, "#textarea/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#textarea/1": ["valueChange", "3:30"] });
}, 1);
