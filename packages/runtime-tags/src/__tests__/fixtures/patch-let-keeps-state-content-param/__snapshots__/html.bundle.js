// tags/boxp.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ b: "b !;D%;<div><!></div>" });
var boxp_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $cg__input_x = _client_guard($scope0_reason, 2), $cg__input_content = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, { x: input.x }, 0, 0, $wg__input_content__OR__input_x, void 0, 1, $scope0_reason, 0, 0, 1);
	_html("</div>");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b2");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.content,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.x
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_x && _patch_fill($scope0_id, "vb0", input.content, !_server_guard($scope0_reason, 1)), $cg__input_x && _content_withhold(input.content), _filled_guard($scope0_reason, 2) && $cg__input_content && _patch_fill($scope0_id, "vb1", input.x, !_server_guard($scope0_reason, 2)), $cg__input_content && _content_withhold(input.x));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "a");
	boxp_default({
		x: input.a,
		content: _content_resume("a1", ({ x }) => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			let l = String(x);
			_html(`<button>${_text_resume($scope1_id, "b", l)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			$scope1_page && _scope($scope1_id, { f: l });
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
