// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag__OR__input_a = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("a0", ({ x }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let l = String(x);
		_html(`<button>${_text_resume($scope1_id, "b", l)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, { f: l });
	}, $scope0_id) };
	const B = { content: _content_resume("a2", ({ x }) => {
		_scope_id();
		_scope_reason();
		_html("<b>B</b>");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.flag ? B : A, { x: input.a }, 0, 0, $wg__input_flag__OR__input_a, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "wd", input.flag, 1);
	_patch_write($scope0_id, "we", input.a, 1);
	_patch_write($scope0_id, "wf", A, 1);
	_patch_write($scope0_id, "wg", B, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a5");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.flag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.a,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && A,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && B
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va3", input.flag, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va4", input.a, !_server_guard($scope0_reason, 2)));
}, 1);
