// template.marko
_shells({
	a3: "a3",
	a0: "a0 !a1",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag__OR__input_a = _write_guard($scope0_reason, 0), $cg__input_a = _client_guard($scope0_reason, 2), $cg__input_flag = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("a0", ({ x }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let l = String(x);
		_html(`<button>${_text_resume($scope1_id, "b", l)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_patch_fill($scope1_id, "va2", l, 1);
		_scope($scope1_id, { f: l });
	}, $scope0_id) };
	const B = { content: _content_resume("a3", ({ x }) => {
		_scope_id();
		_scope_reason();
		_html("<b>B</b>");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.flag ? B : A, { x: input.a }, 1, 0, 0, $wg__input_flag__OR__input_a, $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.flag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		f: _unfilled_if($scope0_reason, 0) && A,
		g: _unfilled_if($scope0_reason, 0) && B
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_a && _patch_fill($scope0_id, "va4", input.flag, !_server_guard($scope0_reason, 1)), $cg__input_a && _content_withhold(input.flag), _filled_guard($scope0_reason, 2) && $cg__input_flag && _patch_fill($scope0_id, "va5", input.a, !_server_guard($scope0_reason, 2)), $cg__input_flag && _content_withhold(input.a));
}, 1);
