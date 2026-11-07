// tags/child.marko
const $template$2 = "<p> </p><!><button class=t>t</button>";
const $walks$2 = "D l%b b";
const $setup$2 = [[], ["__tests__/tags/child.marko_0"]];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0;D l%b ;<p> </p><!><button class=t>t</button>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.a + input.b, 1, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<div></div>${_el_mark($scope1_id, "#div/0")}`);
			_script($scope1_id, "__tests__/tags/child.marko_1_input_a#0:5", 1, _filled_guard($scope0_reason, 1), ">input_a");
			$cg__input_a && _patch_render($scope1_id, "__tests__/tags/child.marko_1_input_a#0:5/setup");
			_scope($scope1_id, {}, "__tests__/tags/child.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	$fg__input_a && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_a#0:5/setup", "input_a");
	_patch_render($scope0_id, "__tests__/tags/child.marko_0_input_a#5_input_b#6/setup", [$fg__input_a && "input_a", $fg__input_b && "input_b"], $scope0_reason, 0);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", open, 1);
	_scope($scope0_id, {
		input_a: input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		open
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		open: "1:6"
	}) || ($fg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 1)), $fg__input_b && $cg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 2)));
});

// tags/mid.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/mid.marko": `__tests__/tags/mid.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)($walks$2)};${$template$2}` });
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_set_scope_reason(16 | ((2 | _updates_from($scope0_reason, 0)) << 1 | _updates_from($scope0_reason, 0) << 5));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: $global$1.x,
		b: input.b
	});
	_patch_child_end();
	_fill_global_subscribe("__tests__/tags/mid.marko_0_$global_x#5/subscribe", $scope0_id);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/mid.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=n>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks$1)};${((_w0) => `${_w0}<button class=n>+</button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	mid_default({ b: n });
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
