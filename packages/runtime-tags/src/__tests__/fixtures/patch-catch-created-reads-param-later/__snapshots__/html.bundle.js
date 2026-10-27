// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a6: "a6;D ;<p> </p>",
	a5: "a5",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_msg = _client_guard($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom(input.msg) : input.msg, void 0, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "a2");
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "a3");
		_patch_join_init($scope2_id, "a4", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">d", _filled_guard($scope0_reason, 2) && ">e");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			Cf: $wi__input_msg && 1
		}), "a2"), _client_guard($scope0_reason, 2) && "a3");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "a", err.message)} ${_patch_text($scope1_id, "b", input.msg, 2, $scope0_reason, 1)}</b>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_msg ? "a0" : "a1");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, void 0, "a5", "a6", 1, 1, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_msg && _patch_write($scope0_id, "xe", input.fail);
	$scope0_page ? _scope($scope0_id, {
		d: input.msg,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.fail,
		f: $wi__input_msg && $input_msg__closures,
		g: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va7", input.msg, !_server_guard($scope0_reason, 1));
}, 1);
