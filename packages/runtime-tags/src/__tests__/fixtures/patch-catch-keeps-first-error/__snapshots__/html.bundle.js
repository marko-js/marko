// tags/child.marko
_shells({ b: "b;D%c%c%;<span><!>|<!>|<!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.msg, void 0, $scope0_reason, 0)}|${_patch_text($scope0_id, "b", input.count, 2, $scope0_reason, 1)}|${_patch_text($scope0_id, "c", input.label, 2, $scope0_reason, 2)}</span>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
function boom(e) {
	throw e;
}
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a !a6; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
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
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom(new Error(input.msg)) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "a3");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "a4");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a3"), _client_guard($scope0_reason, 3) && "a4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(12 | _mask_group($scope0_reason, 1) << 5);
		const $childScope = _patch_child($scope1_id, "a");
		child_default({
			msg: err.message,
			count: n,
			label: input.label
		});
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), "a1"), "a2");
	}, void 0, "a5", "a0", 1, 2);
	_script($scope0_id, "a6");
	_patch_write($scope0_id, "wg", input.fail, 1);
	_patch_write($scope0_id, "wh", input.msg, 1);
	_patch_value($scope0_id, "va8", n, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.fail,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.msg,
		i: n,
		j: _write_if($scope0_reason, 1) && $input_label__closures,
		m: $n__closures,
		k: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures,
		l: _write_if($scope0_reason, 3) && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && $input_msg__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 1));
}, 1);
