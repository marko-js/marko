// tags/child.marko
const $template$1 = "<span><!><!><!></span>";
const $walks$1 = "D%b%b%l";
const $setup$2 = [[], []];
_shells({ b: "b;D%b%b%;<span><!><!><!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.a, 1, $scope0_reason, 1)}${_text_resume($scope0_id, "b", input.b, 2, $scope0_reason, 2)}${_text_resume($scope0_id, "c", typeof input.get === "function" ? input.get() : "", 2, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// tags/shape.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $setup$1 = [[], ["c7"]];
_shells({
	c: "c !c7;b%b ;<!><!><button></button>",
	c4: "c4 !;b%;<!><!><!>",
	c3: /*@__PURE__*/ ((_w0) => `c3${_shell_marker(_shell_setup([["c1", "c12"], []], ["a>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var shape_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sel = _write_guard($scope0_reason, 2), $wi__input_b = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_for_in(input.obj, (k, v) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "vc5", v);
		_if(() => {
			if (k === input.sel) {
				const $scope2_id = _scope_id();
				_set_scope_reason(126);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				child_default({
					a: v + s,
					b: input.b
				});
				_patch_child_end();
				_patch_init_entry($scope2_id, "c0", _filled_guard($scope0_reason, 3) && ">>g", _filled_guard($scope0_reason, 1) && ">e");
				_subscribe($s__closures, _subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				}), _client_guard($scope0_reason, 3) && "c1"), "c2");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_sel, 1, 0, 0, ["c3"], $scope0_reason, 0);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "c6");
		_scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 2) && k,
			e: v,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "c4", $scope0_reason, 1);
	_html(`<button></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c7");
	_patch_fill($scope0_id, "vc10", s, 1);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.sel,
		g: input.b,
		h: s,
		j: $wi__input_b && $input_b__closures,
		k: $s__closures
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc8", input.sel, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "vc9", input.b, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button class=b>b</button>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let b = "x";
	_html(`<button class=b>b</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(128 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5));
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	shape_default({
		obj: input.obj,
		sel: input.sel,
		b
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: b,
		b: _existing_scope($childScope)
	});
}, 1);
