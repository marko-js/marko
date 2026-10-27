// tags/one.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b !;b%;<!><!><!>" });
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_c = _write_guard($scope0_reason, 0), $cg__input_c = _client_guard($scope0_reason, 2), $cg__input_tag = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.tag, { class: input.c }, 1, 0, 0, $wg__input_tag__OR__input_c, $scope0_reason, 0, 0, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b2");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.tag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.c
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_c && _patch_fill($scope0_id, "vb0", input.tag, !_server_guard($scope0_reason, 1)), $cg__input_c && _content_withhold(input.tag), _filled_guard($scope0_reason, 2) && $cg__input_tag && _patch_fill($scope0_id, "vb1", input.c, !_server_guard($scope0_reason, 2)), $cg__input_tag && _content_withhold(input.c));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "a", 0);
	one_default({
		tag: "div",
		c: input.y
	});
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
