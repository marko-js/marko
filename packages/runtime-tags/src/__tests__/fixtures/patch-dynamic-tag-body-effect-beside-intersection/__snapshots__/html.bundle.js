// template.marko
_shells({
	a0: "a0 !a2",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_tag = _write_guard($scope0_reason, 2), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.tag, {}, 2, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 0;
		_html(`<button>${_text_mark($scope1_id, "b", input.a + n)}</button>${_el_mark($scope1_id, "a")}<p>${_text_mark($scope1_id, "c", input.a + input.b, 1, $scope0_reason, 1)}</p>`);
		_script($scope1_id, "a1", 1, _filled_guard($scope0_reason, 3), ">e");
		_script($scope1_id, "a2");
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a3", _client_guard($scope0_reason, 3));
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a4");
		_patch_render($scope1_id, "a5", [_filled_guard($scope0_reason, 3) && ">e", _filled_guard($scope0_reason, 4) && ">f"], $scope0_reason, 1);
		_patch_render($scope1_id, "a6", _filled_guard($scope0_reason, 3) && ">e");
		_patch_fill($scope1_id, "va7", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_a__closures, _scope($scope1_id, {
			e: n,
			_: _scope_with_id($scope0_id)
		})));
	}, $scope0_id, ($scope) => $scope0_page ? [{ f: input.b }] : []), 0, $wg__input_tag, $scope0_reason, 2, 0, void 0, 0, 0, "a0");
	$fg__input_a && _patch_subscribers($scope0_id, "a8", "e");
	$fg__input_b && _patch_subscribers($scope0_id, "a9", "f");
	_scope($scope0_id, {
		e: input.a,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		g: _write_if($scope0_reason, 3) && $input_a__closures,
		h: _write_if($scope0_reason, 4) && $input_b__closures
	}) || ($fg__input_a && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 3)), $fg__input_b && (_client_branch_if("a0", $scope0_id) || _unfilled_if($scope0_reason, 0)) && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 4)));
}, 1);
