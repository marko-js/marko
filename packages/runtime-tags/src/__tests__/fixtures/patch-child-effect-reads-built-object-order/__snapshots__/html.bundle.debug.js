// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko," });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_value = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0_input_value#2", 0, $fg__input_value);
	_scope($scope0_id, { input_value: input.value }, "__tests__/tags/child.marko", 0, { input_value: ["input.value"] }) || $fg__input_value && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<p> </p>${_w0}`)("");
const $walks = /*@__PURE__*/ ((_w0) => `D /${_w0}&l`)("");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D /${_w0}&l`)("")};${((_w0) => `<p> </p>${_w0}`)("")}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_x__OR__input_y = _unfilled_if($scope0_reason, 0), $fg__input_y = _filled_guard($scope0_reason, 2), $fg__input_x = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.x, 1, $scope0_reason, 1)}</p>`);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	child_default({ value: c });
	_patch_child_end();
	_patch_render($scope0_id, "__tests__/template.marko_0_a#6_b#7/setup", (($fg__input_y ? " a" : "") + ($fg__input_x ? " b" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		a: _write_if($scope0_reason, 1) && $ui__input_x__OR__input_y && a,
		b: _write_if($scope0_reason, 2) && $ui__input_x__OR__input_y && b,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		a: "2:8",
		b: "3:8"
	}) || ($fg__input_y && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:a", a, !_server_guard($scope0_reason, 2)), $fg__input_x && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:b", b, !_server_guard($scope0_reason, 1)));
}, 1);
