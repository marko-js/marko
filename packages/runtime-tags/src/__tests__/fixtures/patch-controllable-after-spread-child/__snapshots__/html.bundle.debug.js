// tags/text-field.marko
const $template$1 = "<input>";
const $walks$1 = " b";
const $setup$1 = [[], ["__tests__/tags/text-field.marko_0_attrs#6", "__tests__/tags/text-field.marko_0"]];
_shells({ "__tests__/tags/text-field.marko": "__tests__/tags/text-field.marko !__tests__/tags/text-field.marko_0_attrs#6 __tests__/tags/text-field.marko_0; ;<input>" });
var text_field_default = _template("__tests__/tags/text-field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_value__OR__input_valueChange = _unfilled_if($scope0_reason, 0), $fg__input_value = _filled_guard($scope0_reason, 1), $fg__input_valueChange = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { value, valueChange, ...attrs } = input;
	_html(`<input${_attr_input_value($scope0_id, "#input/0", value, valueChange, 3, $scope0_reason, 0)}${_attrs_partial(attrs, {
		value: 1,
		valueChange: 1
	}, "#input/0", $scope0_id, "input", 0, $scope0_reason, 3)}>${_el_mark($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/text-field.marko_0_attrs#6");
	_script($scope0_id, "__tests__/tags/text-field.marko_0");
	_patch_render($scope0_id, "__tests__/tags/text-field.marko_0_value#3_valueChange#4/setup", (($fg__input_value ? " value" : "") + ($fg__input_valueChange ? " valueChange" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		value: _write_if($scope0_reason, 2) && $ui__input_value__OR__input_valueChange && value,
		valueChange: $ui__input_value__OR__input_valueChange && valueChange
	}, "__tests__/tags/text-field.marko", 0, {
		value: "1:10",
		valueChange: "1:17",
		"ControlledHandler:#input/0": ["valueChange", "2:29"]
	}) || ($fg__input_value && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:value", value, !_server_guard($scope0_reason, 1)), $fg__input_valueChange && $ui__input_value__OR__input_valueChange && _patch_write($scope0_id, "PatchMarkedWrite:valueChange", valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${$template$1}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_v = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_v << 1 | $uf__input_v << 3 | _updates_from($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	text_field_default({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "__tests__/template.marko_0/valueChange")
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
