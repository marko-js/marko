// template.marko
_shells({
	a4: "a4 a2;D%b%;<em><!><!></em>",
	a3: "a3",
	a: "a !a5;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_message = _client_guard($scope0_reason, 0), $fg__input_message = _filled_guard($scope0_reason, 0), $wi__input_message = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<em>${_text_mark($scope2_id, "a", input.message, 1, $scope0_reason, 0)}${_text_mark($scope2_id, "b", "", 2)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a1", $cg__input_message);
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_message__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ch: $wi__input_message && 1
		}), $cg__input_message && "a1"), "a2");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "a", err.message, 1, 4, 0)} ${_text_mark($scope1_id, "b", input.message, 2, $scope0_reason, 0)}</b>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a0", $cg__input_message);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_message && "a0");
	}, 0, "a3", "a4", 1, 1, 1);
	_html(`<button>${_text_mark($scope0_id, "c", count)}</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a5");
	$fg__input_message && _patch_subscribers($scope0_id, "a6", "f");
	_scope($scope0_id, {
		f: input.message,
		g: count,
		h: $wi__input_message && $input_message__closures,
		i: $count__closures
	}) || $fg__input_message && _patch_write($scope0_id, "xf", input.message, !_server_guard($scope0_reason, 0));
}, 1);
