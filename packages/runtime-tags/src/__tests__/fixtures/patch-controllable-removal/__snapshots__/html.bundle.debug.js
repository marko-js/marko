// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><input></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_value = _filled_guard($scope0_reason, 2), $fg__input_wire = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const handler = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "__tests__/template.marko_0/handler");
	_html(`<main><h1>${_text_mark($scope0_id, "#text/0", input.title, 1, $scope0_reason, 1)}</h1><input${_attr_input_value($scope0_id, "#input/1", input.value, input.wire ? handler : undefined, "PatchControl:2#input/1", $scope0_reason, 0, "PatchWrite:ControlledHandler:#input/1", $scope0_reason, 0)}>${_el_mark($scope0_id, "#input/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_value#5_input_wire#6_handler#7/setup", [$fg__input_value && "input_value", $fg__input_wire && "input_wire"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_value: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.value,
		input_wire: _unfilled_if($scope0_reason, 0) && input.wire,
		handler: _unfilled_if($scope0_reason, 0) && handler
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		input_wire: ["input.wire"],
		handler: "1:8",
		"ControlledHandler:#input/1": ["valueChange", "4:28"]
	}) || ($fg__input_value && _client_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 2)), $fg__input_wire && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_wire", input.wire, !_server_guard($scope0_reason, 3)));
}, 1);
