// tags/one.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_t = _write_guard($scope0_reason, 0), $ui__input_content__OR__input_t = _unfilled_if($scope0_reason, 0), $ui__input_t = _unfilled_if($scope0_reason, 2), $ui__input_content = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_t = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, { title: input.t }, 1, 0, 0, $wg__input_content__OR__input_t, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "b0", [$fg__input_content && "d", $fg__input_t && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_t || $ui__input_content__OR__input_t) && input.content,
		e: ($ui__input_content || $ui__input_content__OR__input_t) && input.t
	}) || ($fg__input_content && $ui__input_t && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1)), $fg__input_t && $ui__input_content && _patch_write($scope0_id, "xe", input.t, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_y = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_y << 1 | $uf__input_y << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	one_default({
		t: input.y,
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("A");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
