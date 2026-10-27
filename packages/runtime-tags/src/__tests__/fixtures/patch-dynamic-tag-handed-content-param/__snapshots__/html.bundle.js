// tags/one.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b !;b%;<!><!><!>" });
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_t = _write_guard($scope0_reason, 0), $cg__input_t = _client_guard($scope0_reason, 2), $cg__input_content = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, { title: input.t }, 1, 0, 0, $wg__input_content__OR__input_t, $scope0_reason, 0, 0, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b2");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.t
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_t && _patch_fill($scope0_id, "vb0", input.content, !_server_guard($scope0_reason, 1)), $cg__input_t && _content_withhold(input.content), _filled_guard($scope0_reason, 2) && $cg__input_content && _patch_fill($scope0_id, "vb1", input.t, !_server_guard($scope0_reason, 2)), $cg__input_content && _content_withhold(input.t));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "a", 0);
	one_default({
		t: input.y,
		content: _content_resume("a0", ({ title }) => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_patch_text($scope1_id, "a", title, 2)}`);
			_scope($scope1_id, {});
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
