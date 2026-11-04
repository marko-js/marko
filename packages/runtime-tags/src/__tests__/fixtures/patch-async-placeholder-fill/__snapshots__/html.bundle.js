// template.marko
_shells({
	a1: "a1;D ;<em> </em>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: "a !a6;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_mark($scope3_id, "a", value, 1, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a1", _unfilled_if($scope0_reason, 1) && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a4", $cg__input_promise);
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a4", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "a", input.label, $wg__input_label)}</p>`);
		$cg__input_label && _patch_render($scope1_id, "a0");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a0", $wg__input_label);
	}, void 0, "a5", void 0, "a3", 1);
	_html(`<button>${_text_mark($scope0_id, "c", n)}</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a6");
	$fg__input_label && _patch_subscribers($scope0_id, "a7", "f");
	_scope($scope0_id, {
		f: input.label,
		h: n,
		i: $wi__input_label && $input_label__closures,
		j: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
