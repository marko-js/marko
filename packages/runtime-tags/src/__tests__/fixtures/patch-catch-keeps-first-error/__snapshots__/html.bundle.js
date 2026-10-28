// tags/child.marko
const $setup = [[], []];
_shells({ b: "b;D%c%c%;<span><!>|<!>|<!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.msg, void 0, $scope0_reason, 0)}|${_text_resume($scope0_id, "b", input.count, 2, $scope0_reason, 1)}|${_text_resume($scope0_id, "c", input.label, 2, $scope0_reason, 2)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
function boom(e) {
	throw e;
}
_shells({
	a7: "a7;D ;<p> </p>",
	a6: /*@__PURE__*/ (() => `a6${_shell_marker(_shell_setup([["a1", "a12"], []], ["a>", $setup]))}`)(),
	a: "a !a8; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 3), $cg__input_fail = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.fail ? boom(new Error(input.msg)) : "ok", void 0, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "a3");
		(_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "a4");
		_patch_join_init($scope2_id, "a5", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">g", _filled_guard($scope0_reason, 3) && ">h");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_fail && "a3"), $cg__input_msg && "a4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(12 | _mask_group($scope0_reason, 1) << 5);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		child_default({
			msg: err.message,
			count: n,
			label: input.label
		});
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), "a1"), "a2");
	}, void 0, "a6", "a7", 1, 1, 1);
	_script($scope0_id, "a8");
	_filled_guard($scope0_reason, 2) && $cg__input_msg && _patch_write($scope0_id, "xg", input.fail);
	_filled_guard($scope0_reason, 3) && $cg__input_fail && _patch_write($scope0_id, "xh", input.msg);
	_scope($scope0_id, {
		f: input.label,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.fail,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.msg,
		i: n,
		j: _write_if($scope0_reason, 1) && $input_label__closures,
		m: $n__closures,
		k: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures,
		l: _write_if($scope0_reason, 3) && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && $input_msg__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va9", input.label, !_server_guard($scope0_reason, 1));
}, 1);
