// tags/label.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko," });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/label.marko_0_input_label#2", 0, $fg__input_label, "input_label");
	_scope($scope0_id, { input_label: input.label }, "__tests__/tags/label.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_title__OR__input_n = _unfilled_if($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const o = {
		label: input.title,
		n: input.n
	};
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	_patch_live($childScope, o.label, $scope0_id, "input_title input_n");
	label_default(o);
	_patch_child_end();
	_patch_render($scope0_id, "__tests__/template.marko_0_input_title#3_input_n#4/setup", [$fg__input_title && "input_title", $fg__input_n && "input_n"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_title: (_unfilled_if($scope0_reason, 2) || $ui__input_title__OR__input_n) && input.title,
		input_n: (_unfilled_if($scope0_reason, 1) || $ui__input_title__OR__input_n) && input.n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_n: ["input.n"]
	}) || ($fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 1)), $fg__input_n && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 2)));
}, 1);
