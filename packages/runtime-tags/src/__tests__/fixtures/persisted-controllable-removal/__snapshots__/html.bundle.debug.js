// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><input></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const handler = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "__tests__/template.marko_0/handler");
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 1)}</h1><input${_attr_input_value($scope0_id, "#input/1", input.value, input.wire ? handler : undefined)}${_patch_bind($scope0_id, "ControlledHandler:#input/1", input.wire ? handler : undefined)}${_patch_control($scope0_id, "#input/1", 2, input.value, $scope0_owned, 0)}>${_el_resume($scope0_id, "#input/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_value: input.value,
		input_wire: input.wire,
		handler
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_wire: ["input.wire"],
		handler: "1:8",
		"ControlledHandler:#input/1": ["valueChange", "4:28"]
	});
}, 1, 0);
