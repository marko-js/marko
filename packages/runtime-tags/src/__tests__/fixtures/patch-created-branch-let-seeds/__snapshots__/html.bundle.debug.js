// tags/view.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/view.marko": "__tests__/tags/view.marko !;b%;<!><!><!>",
	"__tests__/tags/view.marko_1*shell": "__tests__/tags/view.marko_1*shell __tests__/tags/view.marko_1_a#2_b#3/init!__tests__/tags/view.marko_1;D l ;<span> </span><button>+</button>"
});
var view_default = _template("__tests__/tags/view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = input.x;
			let b = input.y;
			_html(`<span>${_text_resume($scope1_id, "#text/0", a + b)}</span><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/tags/view.marko_1");
			_filled_guard($scope0_reason, 3) && _patch_write($scope1_id, "PatchWrite:b", b, 1);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/view.marko_1_input_x#0:4/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/tags/view.marko_1_input_y#0:5/init");
			_filled_guard($scope0_reason, 2) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/view.marko_fill2", a, 1);
			_scope($scope1_id, {
				a,
				b,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}, "__tests__/tags/view.marko", "1:2", {
				a: "2:8",
				b: "3:8"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/view.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_x: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.x,
		input_y: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.y
	}, "__tests__/tags/view.marko", 0, {
		input_x: ["input.x"],
		input_y: ["input.y"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/view.marko_fill0", input.x, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/view.marko_fill1", input.y, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	view_default({
		show: input.show,
		x: input.x,
		y: input.y
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
