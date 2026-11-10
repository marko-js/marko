// tags/label.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko," });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_item = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/label.marko_0_input_item#2", 0, $fg__input_item, "input_item");
	_scope($scope0_id, { input_item: input.item }, "__tests__/tags/label.marko", 0, { input_item: ["input.item"] }) || $fg__input_item && _patch_write($scope0_id, "PatchMarkedWrite:input_item", input.item, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $ui__input_b = _unfilled_if($scope0_reason, 2), $ui__input_a = _unfilled_if($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	label_default({
		...input.a,
		...input.b
	});
	_patch_child_end();
	_patch_render($scope0_id, "__tests__/template.marko_0_input_a#3_input_b#4/setup", [$fg__input_a && "input_a", $fg__input_b && "input_b"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_a: ($ui__input_b || $ui__input_a__OR__input_b) && input.a,
		input_b: ($ui__input_a || $ui__input_a__OR__input_b) && input.b,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || ($fg__input_a && $ui__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 1)), $fg__input_b && $ui__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 2)));
}, 1);
