// tags/child.marko
const $template$1 = "<span><!><!><!></span>";
const $walks$1 = "D%b%b%l";
const $setup$2 = [[], []];
_shells({ b: "b;D%b%b%;<span><!><!><!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.a, 1, $scope0_reason, 1)}${_text_mark($scope0_id, "b", input.b, 2, $scope0_reason, 2)}${_text_mark($scope0_id, "c", typeof input.get === "function" ? input.get() : "", 2, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// tags/shape.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $setup$1 = [[], ["c7"]];
_shells({
	c: "c !c7;b%b ;<!><!><button></button>",
	c4: "c4;b%;<!><!><!>",
	c3: `c3${_shell_marker([["c2"], []], ["a>", $setup$2])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var shape_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sel = _write_guard($scope0_reason, 2), $cg__input_sel = _client_guard($scope0_reason, 2), $ui__input_obj = _unfilled_if($scope0_reason, 1), $fg__input_sel = _filled_guard($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 3), $cg__input_obj = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_for_in(input.obj, (k, v) => {
		const $scope1_id = _scope_id(), $fg__input_obj = _filled_guard($scope0_reason, 1);
		$fg__input_obj && _patch_write($scope1_id, "xe", v, !_server_guard($scope0_reason, 1));
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
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "c0");
				_patch_render($scope2_id, "c1", ((_filled_guard($scope0_reason, 3) ? " >>g" : "") + (_filled_guard($scope0_reason, 1) ? " >e" : "")).slice(1));
				_subscribe($s__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				}), _client_guard($scope0_reason, 3) && "c0", 0), "c2", 0);
				_resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_sel, 1, 0, 0, ["c3"], $scope0_reason, 0);
		$fg__input_obj && $cg__input_sel && _patch_render($scope1_id, "c5", "e");
		$cg__input_sel && _patch_render($scope1_id, "c6");
		_scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 2) && k,
			e: v,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "c4", $scope0_reason, 1);
	_html(`<button></button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "c7");
	$fg__input_sel && $cg__input_obj && _patch_render($scope0_id, "c6", "f");
	$fg__input_b && ($cg__input_obj || $cg__input_sel) && _patch_subscribers($scope0_id, "c8", "g");
	_patch_fill($scope0_id, "vc9", s, 1);
	_scope($scope0_id, {
		f: ($ui__input_obj || _unfilled_if($scope0_reason, 2)) && input.sel,
		g: input.b,
		h: s,
		j: _write_if($scope0_reason, 3) && $input_b__closures,
		k: $s__closures
	}) || ($fg__input_sel && $ui__input_obj && _patch_write($scope0_id, "xf", input.sel, !_server_guard($scope0_reason, 2)), $fg__input_b && _patch_write($scope0_id, "xg", input.b, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 3) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	shape_default({
		obj: input.obj,
		sel: input.sel,
		b: input.b
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
