// tags/child.marko
const $setup = [[], ["b3"]];
_shells({ b: "b !b3;D ;<span> </span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_message = _filled_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_count = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.message, 1, $scope0_reason, 0)}</span>`);
	_script($scope0_id, "b0", 1, $fg__input_count);
	_script($scope0_id, "b1", 1, $fg__input_label);
	_script($scope0_id, "b2", 1, $fg__input_message);
	_script($scope0_id, "b3");
	_scope($scope0_id, {
		d: input.message,
		e: input.label,
		f: input.count
	}) || ($fg__input_message && _patch_write($scope0_id, "xd", input.message, !_server_guard($scope0_reason, 0)), $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)), $fg__input_count && _patch_write($scope0_id, "xf", input.count, !_server_guard($scope0_reason, 2)));
});

// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a6: "a6;D ;<p> </p>",
	a5: `a5${_shell_marker([["a1"], []], ["a>", $setup])}`,
	a: "a !a7; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 1), $ui__input_msg__OR__input_fail = _unfilled_if($scope0_reason, 0), $ui__input_msg = _unfilled_if($scope0_reason, 1), $fg__input_msg = _filled_guard($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.fail ? boom(input.msg) : input.msg, 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a2");
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a3");
		_patch_render($scope2_id, "a4", ((_filled_guard($scope0_reason, 1) ? " >f" : "") + (_filled_guard($scope0_reason, 2) ? " >g" : "")).slice(1), $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			Ci: $wi__input_msg && 1
		}), $cg__input_msg && "a2"), _client_guard($scope0_reason, 2) && "a3");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(36 | _updates_from($scope0_reason, 1) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		child_default({
			message: err.message,
			label: input.msg,
			count
		});
		_patch_child_end();
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a0", $cg__input_msg);
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), $cg__input_msg && "a0", 0), "a1", 0);
		_resume_branch($scope1_id);
	}, 0, "a5", "a6", 1, 1, 1);
	_script($scope0_id, "a7");
	$fg__input_msg && _patch_subscribers($scope0_id, "a8", "f");
	_scope($scope0_id, {
		f: input.msg,
		g: ($ui__input_msg || $ui__input_msg__OR__input_fail) && input.fail,
		h: count,
		i: $wi__input_msg && $input_msg__closures,
		k: $count__closures,
		j: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || $ui__input_msg__OR__input_fail) && $input_fail__closures
	}) || ($fg__input_msg && _patch_write($scope0_id, "xf", input.msg, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && $ui__input_msg && _patch_write($scope0_id, "xg", input.fail, !_server_guard($scope0_reason, 2)));
}, 1);
