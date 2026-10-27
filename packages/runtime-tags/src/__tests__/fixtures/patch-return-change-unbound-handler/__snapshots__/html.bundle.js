// tags/counter-box/index.marko
const $template = "<span> </span><button class=mode>b</button>";
const $walks = "D l b";
const $setup$1 = [["b2"], ["b0"]];
_shells({ b: "b b2!b0;D l ;<span> </span><button class=mode>b</button>" });
_stateful_return("b");
var counter_box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mode = "a";
	_html(`<span>${_text_resume($scope0_id, "a", mode)}</span><button class=mode>b</button>${_el_resume($scope0_id, "b")}`);
	const $return = mode;
	_script($scope0_id, "b0");
	const $valueChange = input.onA || void 0;
	_patch_fill($scope0_id, "vb1", mode, 1);
	_scope($scope0_id, {
		e: input.onA,
		f: input.onB,
		g: mode,
		U: $valueChange
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.onA, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.onB, !_server_guard($scope0_reason, 1)));
	return $return;
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `0${_w0}&D l`)($walks)};${((_w0) => `${_w0}<p> </p>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0, 1);
	let count = counter_box_default({
		onA: input.a,
		onB: input.b
	});
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "c", count)}</p>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
