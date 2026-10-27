// tags/one.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/one.marko": "__tests__/tags/one.marko !;b%;<!><!><!>" });
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_t = _write_guard($scope0_reason, 0), $cg__input_t = _client_guard($scope0_reason, 2), $cg__input_content = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, { title: input.t }, 1, 0, 0, $wg__input_content__OR__input_t, $scope0_reason, 0, 0, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/one.marko_0_input_content#3_input_t#4/init");
	$scope0_page ? _scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		input_t: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.t
	}, "__tests__/tags/one.marko", 0, {
		input_content: ["input.content"],
		input_t: ["input.t"]
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_t && _patch_fill($scope0_id, "PatchFill:__tests__/tags/one.marko_fill0", input.content, !_server_guard($scope0_reason, 1)), $cg__input_t && _content_withhold(input.content), _filled_guard($scope0_reason, 2) && $cg__input_content && _patch_fill($scope0_id, "PatchFill:__tests__/tags/one.marko_fill1", input.t, !_server_guard($scope0_reason, 2)), $cg__input_content && _content_withhold(input.t));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_y = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	one_default({
		t: input.y,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`A${_patch_text($scope1_id, "#text/0", input.y, 2, $scope0_reason, 0)}`);
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_y__closures, _scope($scope1_id, { _: $wi__input_y && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_y#0:3/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_y/4": $wi__input_y && $input_y__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
