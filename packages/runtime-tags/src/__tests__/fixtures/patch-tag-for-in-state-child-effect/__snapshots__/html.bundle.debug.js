// tags/child.marko
const $template$2 = "<span><!><!><!></span>";
const $walks$2 = "D%b%b%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D%b%b%;<span><!><!><!></span>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.a, 1, $scope0_reason, 1)}${_text_resume($scope0_id, "#text/1", input.b, 2, $scope0_reason, 2)}${_text_resume($scope0_id, "#text/2", typeof input.get === "function" ? input.get() : "", 2, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/shape.marko
const $template$1 = "<!><!><button></button>";
const $walks$1 = "b%b b";
const $setup$1 = [[], ["__tests__/tags/shape.marko_0"]];
_shells({
	"__tests__/tags/shape.marko": "__tests__/tags/shape.marko !__tests__/tags/shape.marko_0;b%b ;<!><!><button></button>",
	"__tests__/tags/shape.marko_1*shell": "__tests__/tags/shape.marko_1*shell !;b%;<!><!><!>",
	"__tests__/tags/shape.marko_2*shell": /*@__PURE__*/ ((_w0) => `__tests__/tags/shape.marko_2*shell${_shell_marker(_shell_setup([["__tests__/tags/shape.marko_2_input_b#0:6/subscribe", "__tests__/tags/shape.marko_2_s#0:7/init"], []], ["#childScope/0>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2)
});
var shape_default = _template("__tests__/tags/shape.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sel = _write_guard($scope0_reason, 2), $wi__input_b = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	const $s__closures = new Set();
	let s = 0;
	_for_in(input.obj, (k, v) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/shape.marko_fill3", v);
		_if(() => {
			if (k === input.sel) {
				const $scope2_id = _scope_id();
				_set_scope_reason(126);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				child_default({
					a: v + s,
					b: input.b
				});
				_patch_child_end();
				_patch_init_entry($scope2_id, "__tests__/tags/shape.marko_2_input_b#0:6_s#0:7_v#1:4/init", _filled_guard($scope0_reason, 3) && ">>input_b", _filled_guard($scope0_reason, 1) && ">v");
				_subscribe($s__closures, _subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/tags/shape.marko", "1:36"), _client_guard($scope0_reason, 3) && "__tests__/tags/shape.marko_2_input_b#0:6/subscribe"), "__tests__/tags/shape.marko_2_s#0:7/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_sel, void 0, void 0, void 0, ["__tests__/tags/shape.marko_2*shell"], $scope0_reason, 0);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/shape.marko_1_input_sel#0:5/init");
		_scope($scope1_id, {
			"#LoopKey": _unfilled_if($scope0_reason, 2) && k,
			v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/shape.marko", "1:12", {
			"#LoopKey": "1:16",
			v: "1:19"
		});
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/shape.marko_1*shell", $scope0_reason, 1);
	_html(`<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/shape.marko_0");
	_script($scope0_id, "__tests__/tags/shape.marko_0_input_b#6");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/shape.marko_fill2", s, 1);
	_scope($scope0_id, {
		input_sel: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.sel,
		input_b: input.b,
		s,
		"ClosureScopes:input_b/9": $wi__input_b && $input_b__closures,
		"ClosureScopes:s/10": $s__closures
	}, "__tests__/tags/shape.marko", 0, {
		input_sel: ["input.sel"],
		input_b: ["input.b"],
		s: "1:6"
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/shape.marko_fill0", input.sel, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/shape.marko_fill1", input.b, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	shape_default({
		obj: input.obj,
		sel: input.sel,
		b: input.b
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
