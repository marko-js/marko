// tags/one.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b !;b%;<!><!><!>" });
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_attrs = _write_guard($scope0_reason, 0), $cg__input_attrs = _client_guard($scope0_reason, 2), $cg__input_content = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, input.attrs, 0, 0, $wg__input_content__OR__input_attrs, void 0, 1, $scope0_reason, 0, 0, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b2");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.content,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.attrs
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_attrs && _patch_fill($scope0_id, "vb0", input.content, !_server_guard($scope0_reason, 1)), $cg__input_attrs && _content_withhold(input.content), _filled_guard($scope0_reason, 2) && $cg__input_content && _patch_fill($scope0_id, "vb1", input.attrs, !_server_guard($scope0_reason, 2)), $cg__input_content && _content_withhold(input.attrs));
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=z>z</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let z = 0;
	_html(`<button class=z>z</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "b");
	one_default({
		attrs: _patch_live($childScope, { title: input.y }, $scope0_id, "e"),
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("A");
		}, $scope0_id)
	});
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		f: z,
		b: _existing_scope($childScope)
	});
}, 1);
