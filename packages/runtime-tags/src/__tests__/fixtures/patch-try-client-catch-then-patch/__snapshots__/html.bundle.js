// template.marko
_shells({
	a6: "a6 a10;D%b%;<em><!><!></em>",
	a5: "a5",
	a: "a !a7;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_message = _client_guard($scope0_reason, 0), $wi__input_message = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<em>${_text_resume($scope2_id, "a", input.message, 1, $scope0_reason, 0)}${_text_resume($scope2_id, "b", "", 2)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_message ? "a2" : "a3");
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_message__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ch: $wi__input_message && 1
		}), "a3"), "a4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_resume($scope1_id, "a", err.message, 1, 4, 0)} ${_text_resume($scope1_id, "b", input.message, 2, $scope0_reason, 0)}</b>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_message ? "a0" : "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, void 0, "a5", "a6", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		f: input.message,
		g: count,
		h: $wi__input_message && $input_message__closures,
		i: $count__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va8", input.message, !_server_guard($scope0_reason, 0));
}, 1);
