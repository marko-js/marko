// tags/panel.marko
const $template$1 = "<!><!><output> </output>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !;b%bD ;<!><!><output> </output>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/panel.marko_2*shell": "__tests__/tags/panel.marko_2*shell !__tests__/tags/panel.marko_2; D ;<button class=read> </button>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 2), $cg__input_a = _client_guard($scope0_reason, 1), $cg__input_y = _client_guard($scope0_reason, 2), $sg__input_a = _server_guard($scope0_reason, 1), $cg__input_x = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let out = "";
	_if(() => {
		if (input.x) {
			const $scope1_id = _scope_id();
			const v = input.a;
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:v", v, !$sg__input_a);
			_if(() => {
				if (input.y) {
					const $scope2_id = _scope_id();
					_html(`<button class=read>${_text_resume($scope2_id, "#text/1", v, 1, $scope0_reason, 1)}</button>${_el_resume($scope2_id, "#button/0")}`);
					_script($scope2_id, "__tests__/tags/panel.marko_2");
					$cg__input_a && _patch_init($scope2_id, "__tests__/tags/panel.marko_2_v#1:1/init");
					_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "4:4");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $wg__input_y, 1, 0, 0, ["__tests__/tags/panel.marko_2*shell"], $scope0_reason, 2);
			_filled_guard($scope0_reason, 1) && ($cg__input_x || $cg__input_y) && _patch_init_entry($scope1_id, "__tests__/tags/panel.marko_2_v#1:1/init", "v");
			$cg__input_a && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_a#0:5/init");
			$cg__input_y && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_y#0:6/init");
			_scope($scope1_id, {
				v,
				_: _scope_with_id($scope0_id)
			}, "__tests__/tags/panel.marko", "2:2", { v: "3:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 0);
	_html(`<output>${_text_resume($scope0_id, "#text/1", out, 1, 0, 0, 1)}</output>`);
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a,
		input_y: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.y
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		input_y: ["input.y"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_x && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0", input.a, !$sg__input_a), _filled_guard($scope0_reason, 2) && $cg__input_x && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill1", input.y, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=toggle>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button class=toggle>toggle</button>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(32 | (_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	panel_default({
		a: input.a,
		x: input.x,
		y
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		y,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { y: "1:6" });
}, 1);
