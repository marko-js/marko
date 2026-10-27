// tags/pick.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/pick.marko": "__tests__/tags/pick.marko !;b%;<!><!><!>" });
var pick_default = _template("__tests__/tags/pick.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_a__OR__input_b = _write_guard($scope0_reason, 3), $cg__input_a__OR__input_b = _client_guard($scope0_reason, 2), $cg__input_on__OR__input_b = _client_guard($scope0_reason, 1), $cg__input_on__OR__input_a = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const get = () => input.on ? input.a : input.b;
	_dynamic_tag($scope0_id, "#text/0", get(), {}, 2, 0, 0, $wg__input_on__OR__input_a__OR__input_b, $scope0_reason, 3);
	_client_guard($scope0_reason, 3) && _patch_init($scope0_id, "__tests__/tags/pick.marko_0_input_on#3_input_a#4_input_b#5/init");
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.b
	}, "__tests__/tags/pick.marko", 0, {
		input_on: ["input.on"],
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_a__OR__input_b && _patch_fill($scope0_id, "PatchFill:__tests__/tags/pick.marko_fill0", input.on, !_server_guard($scope0_reason, 4)), $cg__input_a__OR__input_b && _content_withhold(input.on), _filled_guard($scope0_reason, 5) && $cg__input_on__OR__input_b && _patch_fill($scope0_id, "PatchFill:__tests__/tags/pick.marko_fill1", input.a, !_server_guard($scope0_reason, 5)), $cg__input_on__OR__input_b && _content_withhold(input.a), _filled_guard($scope0_reason, 6) && $cg__input_on__OR__input_a && _patch_fill($scope0_id, "PatchFill:__tests__/tags/pick.marko_fill2", input.b, !_server_guard($scope0_reason, 6)), $cg__input_on__OR__input_a && _content_withhold(input.b));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>s</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_s#0:6/init",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>s</button>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	const $s__closures = new Set();
	let s = 0;
	_html(`<button>s</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 1) << 9);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	pick_default({
		on: input.on,
		a: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_patch_text($scope1_id, "#text/0", input.x, 2, $scope0_reason, 2)}`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_1_input_x#0:5/init" : "__tests__/template.marko_1_input_x#0:5/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_x__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"));
		}, $scope0_id) }),
		b: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`B${_text_resume($scope2_id, "#text/0", s, 2)}`);
			_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		}, $scope0_id) })
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_x: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.x,
		s,
		"ClosureScopes:input_x/7": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_x__closures,
		"ClosureScopes:s/8": $s__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		s: "1:6"
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.x, !_server_guard($scope0_reason, 2));
}, 1);
