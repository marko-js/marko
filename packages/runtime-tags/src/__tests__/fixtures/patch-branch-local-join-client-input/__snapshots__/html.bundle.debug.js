// tags/child.marko
const $template$1 = "<!><!><div></div>";
const $walks$1 = "b%b b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%b ;<!><!><div></div>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const c = input.b + "!";
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.a + c, 1, $scope0_reason, 0)}</p>`);
			$cg__input_a && _patch_write($scope1_id, "PatchMarkedWrite:c", c, !(_filled_guard($scope0_reason, 2) && $cg__input_a));
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:5/init");
			_patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:6_c#1/init", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && ">input_a", _filled_guard($scope0_reason, 2) && "c");
			_scope($scope1_id, {
				c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}, "__tests__/tags/child.marko", "1:2", { c: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 1);
	_html(`<div></div>${_el_resume($scope0_id, "#div/1")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_a#6", 1, _filled_guard($scope0_reason, 3), "input_a");
	_scope($scope0_id, {
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.b,
		input_a: input.a
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.b, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1/unpatched", input.a) : _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 3))));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(134 | (_mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
