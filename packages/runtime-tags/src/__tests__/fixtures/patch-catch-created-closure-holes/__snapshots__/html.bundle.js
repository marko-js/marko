// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_msg = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom(input.msg) : input.msg, void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "a2");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "a3");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			Cf: $wi__input_msg && 1
		}), "a2"), _client_guard($scope0_reason, 2) && "a3");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const upper = input.msg.toUpperCase();
		_html(`<b${_attr("title", input.msg)}>${_patch_text($scope1_id, "b", err.message)} ${_text_resume($scope1_id, "c", input.msg, 2)} ${_text_resume($scope1_id, "d", upper, 2)} ${_patch_text($scope1_id, "e", err.message + upper, 2, $scope0_reason, 1)}</b>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 1))}`);
		_patch_write($scope1_id, "wh", err?.message, 1);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, {
			h: _unfilled_if($scope0_reason, 1) && err?.message,
			i: _unfilled_if($scope1_reason, 0) && upper,
			_: _scope_with_id($scope0_id)
		}), "a1");
	}, void 0, "a4", "a0", 1, 2);
	_patch_write($scope0_id, "we", input.fail, 1);
	$scope0_page ? _scope($scope0_id, {
		d: input.msg,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.fail,
		f: $wi__input_msg && $input_msg__closures,
		g: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va5", input.msg, !_server_guard($scope0_reason, 1));
}, 1);
