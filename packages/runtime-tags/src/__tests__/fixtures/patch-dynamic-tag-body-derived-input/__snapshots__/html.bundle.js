// template.marko
_shells({
	a0: "a0",
	a: "a !a2; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_a = _client_guard($scope0_reason, 2), $ui__input_tag = _unfilled_if($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", input.tag, {}, 2, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope1_id, "a", input.a.toUpperCase(), 2, $scope0_reason, 2));
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a1", $cg__input_a);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_a && "a1");
	}, $scope0_id, ($scope) => $scope0_page ? [{ g: input.a }] : []), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1, 0, void 0, 0, 0, "a0");
	_script($scope0_id, "a2");
	$fg__input_a && _patch_subscribers($scope0_id, "a3", "g");
	_scope($scope0_id, {
		g: ($ui__input_tag || _unfilled_if($scope0_reason, 2)) && input.a,
		h: n,
		i: _write_if($scope0_reason, 2) && $input_a__closures
	}) || $fg__input_a && (_client_branch_if("a0", $scope0_id) || $ui__input_tag) && _patch_write($scope0_id, "xg", input.a, !_server_guard($scope0_reason, 2));
}, 1);
