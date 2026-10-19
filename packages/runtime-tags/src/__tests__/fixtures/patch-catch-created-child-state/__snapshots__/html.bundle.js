// tags/child.marko
_shells({ b: "b;D%c%;<span><!> <!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.message, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "b", input.count, 2, $scope0_reason, 1)}</span>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a !a5; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", input.fail ? boom(input.msg) : input.msg, void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a2");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a3");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a2"), _client_guard($scope0_reason, 2) && "a3");
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_set_scope_reason(12);
		const $childScope = _patch_child($scope2_id, "a");
		child_default({
			message: err.message,
			count
		});
		_subscribe($count__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), "a1");
	}, void 0, "a4", "a0", 1, 2);
	_script($scope0_id, "a5");
	_patch_write($scope0_id, "wf", input.fail, 1);
	_patch_write($scope0_id, "wg", input.msg, 1);
	_patch_value($scope0_id, "va6", count, 1);
	$scope0_page && _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.fail,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.msg,
		h: count,
		k: $count__closures,
		i: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures,
		j: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_msg__closures
	});
}, 1);
