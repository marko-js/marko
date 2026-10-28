// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { c: n });
});

// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}&`)($D_content__walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}`)($D_content__template, $template)}`)(),
	a3: "a3;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 0), $sg__input_a = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $f2__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.a, !$sg__input_a);
	const f = _bind_resume(function() {
		return input.a;
	}, "a0", $scope0_id);
	const D = { content: _content("a4", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0), $wi__on = _write_if($scope1_reason, 0);
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", f(), void 0, $scope0_reason, 0)}</span>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_a ? "a1" : "a2");
				_subscribe(_unfilled_if($scope0_reason, 0) && $f2__closures, _scope($scope2_id, { _: ($wi__input_a || $wi__on) && _scope_with_id($scope1_id) }), $cg__input_a && "a2");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__on, void 0, void 0, void 0, ["a3"], $scope1_reason, 0);
		($wi__input_a || $wi__on) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	D.content({ on: input.x });
	_patch_child_end();
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	counter_default({});
	_patch_child_end();
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && f,
		h: $wi__input_a && $f2__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", f, !$sg__input_a);
}, 1);
