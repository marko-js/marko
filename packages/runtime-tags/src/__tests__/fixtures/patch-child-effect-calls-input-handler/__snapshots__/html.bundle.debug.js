// tags/label.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko," });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_onRead = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/label.marko_0_input_onRead#2", 0, $fg__input_onRead);
	_scope($scope0_id, { input_onRead: input.onRead }, "__tests__/tags/label.marko", 0, { input_onRead: ["input.onRead"] }) || $fg__input_onRead && _patch_write($scope0_id, "PatchMarkedWrite:input_onRead", input.onRead, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
	const read = _bind_resume(() => input.title, "__tests__/template.marko_0/read", $scope0_id);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	label_default({ onRead: read });
	_patch_child_end();
	_scope($scope0_id, {
		input_title: input.title,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1);
