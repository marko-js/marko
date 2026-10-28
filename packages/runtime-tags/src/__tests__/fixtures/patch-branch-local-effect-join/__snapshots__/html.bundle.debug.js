// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D l ;<p> </p><div></div>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $sg__input_b = _server_guard($scope0_reason, 3), $cg__input_b = _client_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const c = input.b + "!";
			_filled_guard($scope0_reason, 3) && _patch_write($scope1_id, "PatchMarkedWrite:c", c, !$sg__input_b);
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.a + c, 1, $scope0_reason, 1)}</p><div></div>${_el_resume($scope1_id, "#div/1")}`);
			_script($scope1_id, "__tests__/tags/child.marko_1_c#2", 1, _filled_guard($scope0_reason, 3), "c");
			$cg__input_b && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:4/init");
			_patch_init_entry($scope1_id, "__tests__/tags/child.marko_1_input_a#0:5_c#2/init", [_filled_guard($scope0_reason, 4) && ">input_a", _filled_guard($scope0_reason, 3) && "c"], $scope0_reason, 1);
			_scope($scope1_id, {
				c,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			}, "__tests__/tags/child.marko", "1:2", { c: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 2);
	_filled_guard($scope0_reason, 4) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1/unpatched", input.a) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !(_filled_guard($scope0_reason, 4) && $cg__input_b));
	_scope($scope0_id, {
		input_b: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.b,
		input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"]
	}) || _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.b, !$sg__input_b);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 4) << 5 | _mask_group($scope0_reason, 3) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
