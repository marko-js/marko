// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a6: "a6;D ;<p> </p>",
	a5: "a5",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 1), $fg__input_msg = _filled_guard($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.fail ? boom(input.msg) : input.msg, 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a2");
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a3");
		_patch_render($scope2_id, "a4", [_filled_guard($scope0_reason, 1) && ">d", _filled_guard($scope0_reason, 2) && ">e"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			Cf: $wi__input_msg && 1
		}), $cg__input_msg && "a2"), _client_guard($scope0_reason, 2) && "a3");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_unfilled_if($scope0_reason, 1) && _patch_write($scope1_id, "xh", err?.message);
		const upper = input.msg.toUpperCase();
		_html(`<b${_attr("title", input.msg, $scope1_id, "a", $scope0_reason, 1)}>${_text_mark($scope1_id, "b", err.message, 1, 4, 0)} ${_text_mark($scope1_id, "c", input.msg, 2, $scope0_reason, 1)} ${_text_mark($scope1_id, "d", upper, 2, $scope0_reason, 1)} ${_text_mark($scope1_id, "e", err.message + upper, 2, (2 | _updates_from($scope0_reason, 1)) << 1, 0)}</b>${_el_mark($scope1_id, "a", _updates_from($scope0_reason, 1))}`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a0", $cg__input_msg);
		_patch_render($scope1_id, "a1", ["h", _filled_guard($scope0_reason, 1) && "i"], (2 | _updates_from($scope0_reason, 1)) << 1, 0);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, {
			h: _unfilled_if($scope0_reason, 1) && err?.message,
			i: _unfilled_if($scope1_reason, 0) && upper,
			_: _scope_with_id($scope0_id)
		}), $cg__input_msg && "a0");
	}, 0, "a5", "a6", 1, 1, 1);
	$fg__input_msg && _patch_subscribers($scope0_id, "a7", "d");
	_scope($scope0_id, {
		d: input.msg,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.fail,
		f: $wi__input_msg && $input_msg__closures,
		g: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures
	}) || ($fg__input_msg && _patch_write($scope0_id, "xd", input.msg, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.fail, !_server_guard($scope0_reason, 2)));
}, 1);
