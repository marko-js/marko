// tags/counter-box/index.marko
const $template$1 = "<span> </span><button class=mode>b</button>";
const $walks$1 = "D l b";
const $setup$1 = [[], ["__tests__/tags/counter-box/index.marko_0"]];
_shells({ "__tests__/tags/counter-box/index.marko": "^__tests__/tags/counter-box/index.marko !__tests__/tags/counter-box/index.marko_0;D l ;<span> </span><button class=mode>b</button>" });
_stateful_return("__tests__/tags/counter-box/index.marko");
var counter_box_default = _template("__tests__/tags/counter-box/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_onA = _filled_guard($scope0_reason, 0), $fg__input_onB = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let mode = "a";
	_html(`<span>${_text_mark($scope0_id, "#text/0", mode)}</span><button class=mode>b</button>${_el_mark($scope0_id, "#button/1")}`);
	const $return = mode;
	_script($scope0_id, "__tests__/tags/counter-box/index.marko_0");
	_patch_render($scope0_id, "__tests__/tags/counter-box/index.marko_0_input_onA#4_input_onB#5_mode#6/setup", [$fg__input_onA && "input_onA", $fg__input_onB && "input_onB"]);
	const $valueChange = _patch_bind($scope0_id, "PatchWrite:#TagVariableChange", (mode === "a" ? input.onA : input.onB) || void 0, 0, 0);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter-box/index.marko_fill0", mode, 1);
	_scope($scope0_id, {
		input_onA: input.onA,
		input_onB: input.onB,
		mode,
		"#TagVariableChange": $valueChange
	}, "__tests__/tags/counter-box/index.marko", 0, {
		input_onA: ["input.onA"],
		input_onB: ["input.onB"],
		mode: "1:6"
	}) || ($fg__input_onA && _patch_write($scope0_id, "PatchMarkedWrite:input_onA", input.onA, !_server_guard($scope0_reason, 0)), $fg__input_onB && _patch_write($scope0_id, "PatchMarkedWrite:input_onB", input.onB, !_server_guard($scope0_reason, 1)));
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `0${_w0}&D l`)($walks$1)};${((_w0) => `${_w0}<p> </p>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, 1);
	let count = counter_box_default({
		onA: input.a,
		onB: input.b
	});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count#7/var");
	_patch_child_end();
	_html(`<p>${_text_mark($scope0_id, "#text/2", count)}</p>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
