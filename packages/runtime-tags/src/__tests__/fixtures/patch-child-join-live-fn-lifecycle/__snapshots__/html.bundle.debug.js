// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !;D ;<p> </p>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_b = _server_guard($scope0_reason, 2), $cg__input_a = _client_guard($scope0_reason, 1), $sg__input_a = _server_guard($scope0_reason, 1), $cg__input_b = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !$sg__input_a);
	const fmt = _bind_resume(() => input.a + "!", "__tests__/tags/child.marko_0/fmt", $scope0_id);
	_html(`<p>${_text_resume($scope0_id, "#text/0", fmt() + input.b, 1, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_b#4_fmt#5", 1, (_filled_guard($scope0_reason, 2) || _filled_guard($scope0_reason, 1)) && ($cg__input_b || $cg__input_a ? 2 : 1), _filled_guard($scope0_reason, 2) && "input_b", _filled_guard($scope0_reason, 1) && "fmt");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/child.marko_0_input_b#4_fmt#5/init");
	_scope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		fmt
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		fmt: "1:8"
	}) || (_filled_guard($scope0_reason, 2) && ($cg__input_a ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.b, !$sg__input_b) : _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !$sg__input_b)), _filled_guard($scope0_reason, 1) && ($cg__input_b ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1", fmt, !$sg__input_a) : _patch_write($scope0_id, "PatchMarkedWrite:fmt", fmt, !$sg__input_a)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b`)("D l", "D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b`)("D l", "D l")};${((_w0, _w1) => `${_w0}${_w1}<button>+</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.a,
		b: input.b
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
