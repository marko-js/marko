// tags/child.marko
const $setup = [[], []];
_shells({ b: "b;D%c%;<span><!> <!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.message, void 0, $scope0_reason, 0)} ${_text_resume($scope0_id, "b", input.count, 2, $scope0_reason, 1)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([["a8"], []], ["a>", $setup]))}`)(),
	a5: "a5;D ;<p> </p>",
	a: "a !a6; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 2), $cg__input_fail = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.fail ? boom(input.msg) : input.msg, void 0, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "a1");
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "a2");
		_patch_join_init($scope1_id, "a3", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">f", _filled_guard($scope0_reason, 2) && ">g");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_fail && "a1"), $cg__input_msg && "a2");
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_set_scope_reason(12);
		const $childScope = _peek_scope_id($scope2_id, "a", 0);
		child_default({
			message: err.message,
			count
		});
		_patch_child_end();
		_subscribe($count__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), "a0");
	}, void 0, "a4", "a5", 1, 1, 1);
	_script($scope0_id, "a6");
	_filled_guard($scope0_reason, 1) && $cg__input_msg && _patch_write($scope0_id, "xf", input.fail);
	_filled_guard($scope0_reason, 2) && $cg__input_fail && _patch_write($scope0_id, "xg", input.msg);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.fail,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.msg,
		h: count,
		k: $count__closures,
		i: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures,
		j: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_msg__closures
	});
}, 1);
