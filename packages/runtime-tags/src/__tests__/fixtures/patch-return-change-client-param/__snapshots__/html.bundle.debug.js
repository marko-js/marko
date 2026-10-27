// tags/counter-box/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/counter-box/index.marko": "^__tests__/tags/counter-box/index.marko;D ;<span> </span>" });
var counter_box_default = _template("__tests__/tags/counter-box/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<span>${_patch_text($scope0_id, "#text/0", count, void 0, 0, 0)}</span>`);
	const $return = count;
	const $valueChange = _patch_bind($scope0_id, "PatchWrite:#TagVariableChange", input.onChange || void 0, $scope0_reason, 0);
	_scope($scope0_id, {
		input_onChange: input.onChange,
		"#TagVariableChange": $valueChange
	}, "__tests__/tags/counter-box/index.marko", 0, { input_onChange: ["input.onChange"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_onChange", input.onChange, !_server_guard($scope0_reason, 0));
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=mode>b</button><button class=set>set</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b b`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `0${_w0}&D l b b`)("D l")};${((_w0) => `${_w0}<p> </p><button class=mode>b</button><button class=set>set</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mode = "a";
	let last = "none";
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0, 1);
	let count = counter_box_default({ onChange: mode === "a" ? _resume(function(v) {
		last = "a" + v;
	}, "__tests__/template.marko_0/onChange", $scope0_id) : _resume(function(v) {
		last = "b" + v;
	}, "__tests__/template.marko_0/onChange2", $scope0_id) });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count#5/var");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/2", last)}</p><button class=mode>b</button>${_el_resume($scope0_id, "#button/3")}<button class=set>set</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
