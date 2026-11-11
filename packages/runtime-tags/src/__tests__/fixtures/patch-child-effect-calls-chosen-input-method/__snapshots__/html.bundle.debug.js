// tags/label.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko," });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/label.marko_0_input#1", 0, $fg__input);
	_scope($scope0_id, { input }, "__tests__/tags/label.marko", 0, { input: 0 }) || $fg__input && _patch_write($scope0_id, "PatchMarkedWrite:input", input, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_title__OR__input_upper = _unfilled_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 1), $ui__input_upper = _unfilled_if($scope0_reason, 2), $fg__input_upper = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	label_default({ get: input.upper ? up : low });
	_patch_child_end();
	_patch_render($scope0_id, "__tests__/template.marko_0_input_upper#4_up#5_low#6/setup", (($fg__input_upper ? " input_upper" : "") + ($fg__input_title ? " up" : "") + ($fg__input_title ? " input_title" : "") + ($fg__input_title ? " low" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_title: input.title,
		input_upper: $ui__input_title__OR__input_upper && input.upper,
		up: $ui__input_title__OR__input_upper && up,
		low: $ui__input_title__OR__input_upper && low,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_upper: ["input.upper"],
		up: "1:8",
		low: "2:8"
	}) || ($fg__input_upper && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_upper", input.upper, !_server_guard($scope0_reason, 2)), $fg__input_title && $ui__input_upper && _patch_write($scope0_id, "PatchMarkedWrite:up", up, !$sg__input_title), $fg__input_title && $ui__input_upper && _patch_write($scope0_id, "PatchMarkedWrite:low", low, !$sg__input_title));
}, 1);
