// tags/stepper.marko
const $template$1 = "<input type=number>";
const $walks$1 = " b";
const $setup$1 = [[], ["__tests__/tags/stepper.marko_0"]];
_shells({ "__tests__/tags/stepper.marko": "__tests__/tags/stepper.marko !__tests__/tags/stepper.marko_0; ;<input type=number>" });
var stepper_default = _template("__tests__/tags/stepper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_value__OR__input_valueChange = _unfilled_if($scope0_reason, 0), $sg__input_max = _server_guard($scope0_reason, 1), $fg__input_max = _filled_guard($scope0_reason, 1), $fg__input_value = _filled_guard($scope0_reason, 2), $fg__input_valueChange = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	$fg__input_max && _patch_write($scope0_id, "PatchMarkedWrite:input_max", input.max, !$sg__input_max);
	const clamp = _bind_resume((v) => Math.min(input.max, Number(v)), "__tests__/tags/stepper.marko_0/clamp", $scope0_id);
	$fg__input_max && _patch_write($scope0_id, "PatchMarkedWrite:clamp", clamp, !$sg__input_max);
	let current = input.value;
	_html(`<input${_attr_input_value($scope0_id, "#input/0", current, _bind_resume((_new_current) => current = clamp(_new_current), "__tests__/tags/stepper.marko_0/valueChange", $scope0_id))} type=number>${_el_mark($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/stepper.marko_0");
	_patch_render($scope0_id, "__tests__/tags/stepper.marko_0_input_value#4_input_valueChange#5/setup", (($fg__input_value ? " input_value" : "") + ($fg__input_valueChange ? " input_valueChange" : "")).slice(1), $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/tags/stepper.marko_0_clamp#7_current#8/setup", (($fg__input_max ? " clamp" : "") + ($fg__input_max ? " input_max" : "") + ($fg__input_value ? " input_value" : "") + ($fg__input_valueChange ? " input_valueChange" : "")).slice(1));
	const $currentChange = input.valueChange || void 0;
	_patch_let_change($scope0_id, "PatchFill:__tests__/tags/stepper.marko_0_current#8/fill", current, "PatchWrite:TagVariableChange:current", $currentChange, $scope0_reason, 0);
	_scope($scope0_id, {
		input_max: input.max,
		input_value: $ui__input_value__OR__input_valueChange && input.value,
		input_valueChange: $ui__input_value__OR__input_valueChange && input.valueChange,
		clamp,
		current: _write_if($scope0_reason, 1) && current,
		"TagVariableChange:current": $currentChange
	}, "__tests__/tags/stepper.marko", 0, {
		input_max: ["input.max"],
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		clamp: "1:8",
		current: "2:6",
		"TagVariableChange:current": ["currentChange", "2:6"],
		"ControlledHandler:#input/0": ["valueChange"]
	}) || ($fg__input_value && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 2)), $fg__input_valueChange && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_valueChange", input.valueChange, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_for_of($global$1.rows, (row) => {
		const $scope1_id = _scope_id();
		let qty = row.qty;
		_set_scope_reason(50);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		stepper_default({
			value: qty,
			valueChange: _resume((_new_qty) => qty = _new_qty, "__tests__/template.marko_1/valueChange", $scope1_id),
			max: row.qty
		});
		_patch_child_end();
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_qty#4/fill", qty, 1);
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell");
	_fill_global_subscribe("__tests__/template.marko_0_$global_rows#7", $scope0_id);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
