// template.marko
_shells({
	a3: "a3",
	a0: "a0 !a1",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag__OR__input_a = _write_guard($scope0_reason, 0), $ui__input_flag__OR__input_a = _unfilled_if($scope0_reason, 0), $fg__input_flag = _filled_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("a0", ({ x }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let l = String(x);
		_html(`<button>${_text_mark($scope1_id, "b", l)}</button>${_el_mark($scope1_id, "a")}`);
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
	_patch_render($scope0_id, "a4", (($fg__input_flag ? " d" : "") + ($fg__input_a ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_flag__OR__input_a && input.flag,
		e: _write_if($scope0_reason, 1) && $ui__input_flag__OR__input_a && input.a,
		f: $ui__input_flag__OR__input_a && A,
		g: $ui__input_flag__OR__input_a && B
	}) || ($fg__input_flag && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.flag, !_server_guard($scope0_reason, 1)), $fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 2)));
}, 1);
