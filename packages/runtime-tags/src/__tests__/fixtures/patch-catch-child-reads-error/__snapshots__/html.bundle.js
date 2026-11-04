// tags/child.marko
const $setup = [[], []];
_shells({ b: "b;D%c%c%;<span><!> <!> <!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.message, 1, $scope0_reason, 0)} ${_text_mark($scope0_id, "b", input.count, 2, $scope0_reason, 1)} ${_text_mark($scope0_id, "c", input.label, 2, $scope0_reason, 2)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
function boom(error) {
	throw error;
}
_shells({
	a4: "a4;D ;<p> </p>",
	a3: `a3${_shell_marker([["a1"], []], ["a>", $setup])}`,
	a: "a !a5; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a2", $cg__input_error);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "a2");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(12 | _updates_from($scope0_reason, 0) << 5);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		child_default({
			message: err.message,
			count,
			label: input.label
		});
		_patch_child_end();
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a0", $cg__input_label);
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), $cg__input_label && "a0", 0), "a1", 0);
		_resume_branch($scope1_id);
	}, 0, "a3", "a4", 1, 1, 1);
	_script($scope0_id, "a5");
	$fg__input_label && _patch_subscribers($scope0_id, "a6", "f");
	_scope($scope0_id, {
		f: input.label,
		h: count,
		i: _write_if($scope0_reason, 0) && $input_label__closures,
		k: $count__closures,
		j: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
