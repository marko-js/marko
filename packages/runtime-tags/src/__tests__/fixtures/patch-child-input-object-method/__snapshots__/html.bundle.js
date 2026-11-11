// tags/code-block.marko
const $template = "<div> </div>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<div> </div>" });
var code_block_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_cursor__OR__input_text = _unfilled_if($scope0_reason, 0), $wi__input_text = _write_if($scope0_reason, 2), $ui__input_text = _unfilled_if($scope0_reason, 2), $sg__input_cursor = _server_guard($scope0_reason, 1), $fg__input_cursor = _filled_guard($scope0_reason, 1), $fg__input_text = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_cursor && $ui__input_text && _patch_write($scope0_id, "xd", input.cursor, !$sg__input_cursor);
	const highlight = _bind_resume(function(text) {
		return text.replace(input.cursor.test, (m) => `<b>${input.cursor.content((s) => s)}</b>`);
	}, "b0", $scope0_id);
	_html(`<div>${_html_mark($scope0_id, "a", highlight(input.text), 1, $scope0_reason, 0)}</div>`);
	_patch_render($scope0_id, "b1", (($fg__input_text ? " e" : "") + ($fg__input_cursor ? " f" : "") + ($fg__input_cursor ? " d" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: $wi__input_text && $ui__input_cursor__OR__input_text && input.cursor,
		e: _write_if($scope0_reason, 1) && $ui__input_cursor__OR__input_text && input.text,
		f: $wi__input_text && $ui__input_cursor__OR__input_text && highlight
	}) || ($fg__input_text && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.text, !_server_guard($scope0_reason, 2)), $fg__input_cursor && $ui__input_text && _patch_write($scope0_id, "xf", highlight, !$sg__input_cursor));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_text = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_text << 1 | $uf__input_text << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	code_block_default({
		text: input.text,
		cursor: {
			test: /x/g,
			content: _resume(function(h) {
				return h("cursor");
			}, "a0")
		}
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
