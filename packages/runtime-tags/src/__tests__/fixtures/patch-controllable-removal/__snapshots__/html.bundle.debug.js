// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><input></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const handler = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "__tests__/template.marko_0/handler");
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</h1><input${_patch_input_value($scope0_id, "#input/1", input.value, input.wire ? handler : undefined, "PatchControl:2#input/1", $scope0_reason, 0, "PatchBind:ControlledHandler:#input/1", $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:input_value", input.value, 1);
	_patch_write($scope0_id, "PatchWrite:input_wire", input.wire, 1);
	_patch_write($scope0_id, "PatchWrite:handler", handler, 1);
	$scope0_page && _scope($scope0_id, {
		input_value: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.value,
		input_wire: _unfilled_if($scope0_reason, 0) && input.wire,
		handler: _unfilled_if($scope0_reason, 0) && handler
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_wire: ["input.wire"],
		handler: "1:8",
		"ControlledHandler:#input/1": ["valueChange", "4:28"]
	});
}, 1);
