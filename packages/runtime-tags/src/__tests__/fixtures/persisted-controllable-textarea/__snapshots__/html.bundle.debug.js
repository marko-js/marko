// template.marko
const $template = "<main><h1> </h1><textarea></textarea></main>";
const $walks = "E l l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><textarea></textarea></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h1><textarea${_patch_bind($scope0_id, "ControlledHandler:#textarea/1", _resume(function(next) {
		document.querySelector("main").dataset.text = next;
	}, "__tests__/template.marko_0/valueChange"), 0, 0)}${_patch_control($scope0_id, "#textarea/1", 2, input.text, $scope0_owned, 1)}>${_attr_textarea_value($scope0_id, "#textarea/1", input.text, _resume(function(next) {
		document.querySelector("main").dataset.text = next;
	}, "__tests__/template.marko_0/valueChange"))}</textarea>${_el_resume($scope0_id, "#textarea/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#textarea/1": ["valueChange", "3:30"] });
}, 1, 0);
