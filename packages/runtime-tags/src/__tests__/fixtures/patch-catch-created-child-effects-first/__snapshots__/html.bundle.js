// tags/inner.marko
_shells({ b: "b !b0,<span>inner</span>" });
var inner_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>inner</span>");
	_script($scope0_id, "b0", 0);
});

// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", input.fail ? boom(input.msg) : input.msg, void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a2");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a3");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a2"), _client_guard($scope0_reason, 2) && "a3");
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_patch_write($scope2_id, "wd", err?.message);
		const $childScope = _patch_child($scope2_id, "a");
		inner_default({});
		_script($scope2_id, "a1");
		_patch_effect($scope2_id, "ea1", "d");
		_scope($scope2_id, {
			d: err?.message,
			a: _existing_scope($childScope)
		});
	}, void 0, "a4", "a0", 1, "a1");
	_patch_write($scope0_id, "wd", input.fail, 1);
	_patch_write($scope0_id, "we", input.msg, 1);
	$scope0_page && _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.fail,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.msg,
		f: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures,
		g: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_msg__closures
	});
}, 1);
