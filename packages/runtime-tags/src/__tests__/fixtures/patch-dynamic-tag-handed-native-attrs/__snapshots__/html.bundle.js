// tags/one.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_c = _write_guard($scope0_reason, 0), $ui__input_tag__OR__input_c = _unfilled_if($scope0_reason, 0), $ui__input_c = _unfilled_if($scope0_reason, 2), $ui__input_tag = _unfilled_if($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 1), $fg__input_c = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.tag, { class: input.c }, 1, 0, 0, $wg__input_tag__OR__input_c, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "b0", [$fg__input_tag && "d", $fg__input_c && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_c || $ui__input_tag__OR__input_c) && input.tag,
		e: ($ui__input_tag || $ui__input_tag__OR__input_c) && input.c
	}) || ($fg__input_tag && $ui__input_c && _patch_write($scope0_id, "xd", input.tag, !_server_guard($scope0_reason, 1)), $fg__input_c && $ui__input_tag && _patch_write($scope0_id, "xe", input.c, !_server_guard($scope0_reason, 2)));
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
		tag: "div",
		c: input.y
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
