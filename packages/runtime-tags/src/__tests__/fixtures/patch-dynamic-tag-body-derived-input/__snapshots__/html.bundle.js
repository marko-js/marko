// template.marko
_shells({
	a0: "a0",
	a: "a !a3; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", input.tag, {}, 2, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_patch_text($scope1_id, "a", input.a.toUpperCase(), void 0, $scope0_reason, 2));
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ g: input.a }] : []), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		h: n,
		i: _write_if($scope0_reason, 2) && $input_a__closures
	}) || _filled_guard($scope0_reason, 2) && _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va4", input.a, !_server_guard($scope0_reason, 2));
}, 1);
