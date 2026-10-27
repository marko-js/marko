// tags/child.marko
const $setup = [[], []];
_shells({ b: "b;D%c%c%;<span><!> <!> <!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.message, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "b", input.count, 2, $scope0_reason, 1)} ${_patch_text($scope0_id, "c", input.label, 2, $scope0_reason, 2)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
function boom(error) {
	throw error;
}
_shells({
	a6: "a6;D ;<p> </p>",
	a5: /*@__PURE__*/ (() => `a5${_shell_marker(_shell_setup([["a1", "a11"], []], ["a>", $setup]))}`)(),
	a: "a !a7; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_error ? "a3" : "a4");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "a4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(12 | _mask_group($scope0_reason, 0) << 5);
		const $childScope = _patch_child($scope1_id, "a", 0);
		child_default({
			message: err.message,
			count,
			label: input.label
		});
		_patch_child_end();
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a0");
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), "a1"), "a2");
	}, void 0, "a5", "a6", 1, 1, 1);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		f: input.label,
		h: count,
		i: _write_if($scope0_reason, 0) && $input_label__closures,
		k: $count__closures,
		j: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 0));
}, 1);
