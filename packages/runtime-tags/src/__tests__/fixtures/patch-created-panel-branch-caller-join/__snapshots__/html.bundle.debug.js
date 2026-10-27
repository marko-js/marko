// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !;b%;<!><!><!>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell;D ;<em> </em>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.a + ":" + input.b, void 0, $scope0_reason, 2)}</em>`);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_a#0:4_input_b#0:5/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 4);
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.b
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0/unpatched", input.a) : _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0", input.a, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill1", input.b, !_server_guard($scope0_reason, 6))));
});

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_count#0:7/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_outer = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2534 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 3) << 9 | _mask_group($scope0_reason, 2) << 13));
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			panel_default({
				a: count,
				b: input.x,
				show: input.show
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_x#0:5/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_show#0:6/init");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_x: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.x,
		input_show: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.show,
		count
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		input_show: ["input.show"],
		count: "1:6"
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_outer && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.x, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_outer && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.show, !_server_guard($scope0_reason, 3)));
}, 1);
