// tags/child.marko
const $setup = [[], []];
_shells({ b: "b;D%c%c%;<span><!>|<!>|<!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.msg, 1, $scope0_reason, 0)}|${_text_mark($scope0_id, "b", input.count, 2, $scope0_reason, 1)}|${_text_mark($scope0_id, "c", input.label, 2, $scope0_reason, 2)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
function boom(e) {
	throw e;
}
_shells({
	a6: "a6;D ;<p> </p>",
	a5: `a5${_shell_marker([["a1"], []], ["a>", $setup])}`,
	a: "a !a7; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $ui__input_fail__OR__input_msg = _unfilled_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.fail ? boom(new Error(input.msg)) : "ok", 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a2");
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a3");
		_patch_render($scope2_id, "a4", ((_filled_guard($scope0_reason, 2) ? " >g" : "") + (_filled_guard($scope0_reason, 3) ? " >h" : "")).slice(1), $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a2"), _client_guard($scope0_reason, 3) && "a3");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(12 | _updates_from($scope0_reason, 1) << 5);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		child_default({
			msg: err.message,
			count: n,
			label: input.label
		});
		_patch_child_end();
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a0", $cg__input_label);
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), $cg__input_label && "a0", 0), "a1", 0);
		_resume_branch($scope1_id);
	}, 0, "a5", "a6", 1, 1, 1);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		f: input.label,
		g: $ui__input_fail__OR__input_msg && input.fail,
		h: $ui__input_fail__OR__input_msg && input.msg,
		i: n,
		j: _write_if($scope0_reason, 1) && $input_label__closures,
		m: $n__closures,
		k: _write_if($scope0_reason, 2) && $ui__input_fail__OR__input_msg && $input_fail__closures,
		l: _write_if($scope0_reason, 3) && $ui__input_fail__OR__input_msg && $input_msg__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a8", "f"), _filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xg", input.fail, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xh", input.msg, !_server_guard($scope0_reason, 3)));
}, 1);
