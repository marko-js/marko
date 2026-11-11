// template.marko
function boom(msg) {
	throw new Error(msg);
}
_shells({
	a5: "a5;D ;<p> </p>",
	a4: "a4",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 1), $ui__input_msg__OR__input_fail = _unfilled_if($scope0_reason, 0), $wi__input_msg = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.fail ? boom(input.msg) : input.msg, 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a1");
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a2");
		_patch_render($scope2_id, "a3", ((_filled_guard($scope0_reason, 1) ? " >d" : "") + (_filled_guard($scope0_reason, 2) ? " >e" : "")).slice(1), $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			Cf: $wi__input_msg && 1
		}), $cg__input_msg && "a1"), _client_guard($scope0_reason, 2) && "a2");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "a", err.message, 1, 4, 0)} ${_text_mark($scope1_id, "b", input.msg, 2, $scope0_reason, 1)}</b>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a0", $cg__input_msg);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_msg && "a0");
	}, 0, "a4", "a5", 1, 1, 1);
	_scope($scope0_id, {
		d: input.msg,
		e: $ui__input_msg__OR__input_fail && input.fail,
		f: $wi__input_msg && $input_msg__closures,
		g: _write_if($scope0_reason, 2) && $ui__input_msg__OR__input_fail && $input_fail__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.msg, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a6", "d"), _filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.fail, !_server_guard($scope0_reason, 2)));
}, 1);
