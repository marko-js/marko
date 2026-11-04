// template.marko
const $template = "<input><p id=out>-</p><button>interactive</button>";
const $walks = " c b";
const $setup = [[], ["__tests__/template.marko_0", "__tests__/template.marko_0_input_attrs#4_input_on#5"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0 __tests__/template.marko_0_input_attrs#4_input_on#5; c ;<input><p id=out>-</p><button>interactive</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_attrs = _filled_guard($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<input${_attrs({
		type: "checkbox",
		...input.attrs,
		checked: input.on
	}, "#input/0", $scope0_id, "input", 1, $scope0_reason, 0)}>${_el_mark($scope0_id, "#input/0")}<p id=out>-</p><button>interactive</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#4_input_on#5");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_attrs#4_input_on#5/setup", [$fg__input_attrs && "input_attrs", $fg__input_on && "input_on"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_attrs: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.attrs,
		input_on: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.on
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		input_on: ["input.on"],
		"ControlledHandler:#input/0": ["...input.attrs", "1:27"],
		"EventAttributes:#input/0": ["...input.attrs", "1:27"]
	}) || ($fg__input_attrs && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_attrs", input.attrs, !_server_guard($scope0_reason, 1)), $fg__input_on && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 2)));
}, 1);
