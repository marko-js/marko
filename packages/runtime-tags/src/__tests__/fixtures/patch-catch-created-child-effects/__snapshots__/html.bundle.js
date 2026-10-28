// tags/child.marko
const $setup = [[], ["b3"]];
_shells({ b: "b !b3;D ;<span> </span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.message, 1, $scope0_reason, 0)}</span>`);
	_script($scope0_id, "b0", 1, _filled_guard($scope0_reason, 2), "f");
	_script($scope0_id, "b1", 1, _filled_guard($scope0_reason, 1), "e");
	_script($scope0_id, "b2", 1, _filled_guard($scope0_reason, 0), "d");
	_script($scope0_id, "b3");
	_scope($scope0_id, {
		d: input.message,
		e: input.label,
		f: input.count
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.message, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.count, !_server_guard($scope0_reason, 2)));
});

// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a7: "a7;D ;<p> </p>",
	a6: /*@__PURE__*/ (() => `a6${_shell_marker(_shell_setup([["a1", "a12"], []], ["a>", $setup]))}`)(),
	a: "a !a8; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.fail ? boom(input.msg) : input.msg, 1, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "a3");
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "a4");
		_patch_init_entry($scope2_id, "a5", [_filled_guard($scope0_reason, 1) && ">f", _filled_guard($scope0_reason, 2) && ">g"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			Ci: $wi__input_msg && 1
		}), "a3"), _client_guard($scope0_reason, 2) && "a4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(36 | _mask_group($scope0_reason, 1) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		child_default({
			message: err.message,
			label: input.msg,
			count
		});
		_patch_child_end();
		$cg__input_msg && _patch_init($scope1_id, "a0");
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), "a1"), "a2");
	}, 0, "a6", "a7", 1, 1, 1);
	_script($scope0_id, "a8");
	_filled_guard($scope0_reason, 2) && $cg__input_msg && _patch_write($scope0_id, "xg", input.fail);
	_scope($scope0_id, {
		f: input.msg,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.fail,
		h: count,
		i: $wi__input_msg && $input_msg__closures,
		k: $count__closures,
		j: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va9", input.msg, !_server_guard($scope0_reason, 1));
}, 1);
