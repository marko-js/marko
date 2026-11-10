// tags/code-block.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/code-block.marko": "__tests__/tags/code-block.marko;D ;<div> </div>" });
var code_block_default = _template("__tests__/tags/code-block.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_cursor__OR__input_text = _unfilled_if($scope0_reason, 0), $ui__input_text = _unfilled_if($scope0_reason, 2), $ui__input_cursor = _unfilled_if($scope0_reason, 1), $sg__input_cursor = _server_guard($scope0_reason, 1), $fg__input_cursor = _filled_guard($scope0_reason, 1), $fg__input_text = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_cursor && $ui__input_text && _patch_write($scope0_id, "PatchMarkedWrite:input_cursor", input.cursor, !$sg__input_cursor);
	const highlight = _bind_resume(function(text) {
		return text.replace(input.cursor.test, (m) => `<b>${input.cursor.content((s) => s)}</b>`);
	}, "__tests__/tags/code-block.marko_0/highlight", $scope0_id);
	_html(`<div>${_html_mark($scope0_id, "#text/0", highlight(input.text), 1, $scope0_reason, 0)}</div>`);
	_patch_render($scope0_id, "__tests__/tags/code-block.marko_0_input_text#4_highlight#5/setup", (($fg__input_text ? " input_text" : "") + ($fg__input_cursor ? " highlight" : "") + ($fg__input_cursor ? " input_cursor" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_cursor: ($ui__input_text || $ui__input_cursor__OR__input_text) && input.cursor,
		input_text: ($ui__input_cursor || $ui__input_cursor__OR__input_text) && input.text,
		highlight: ($ui__input_text || $ui__input_cursor__OR__input_text) && highlight
	}, "__tests__/tags/code-block.marko", 0, {
		input_cursor: ["input.cursor"],
		input_text: ["input.text"],
		highlight: "1:8"
	}) || ($fg__input_text && $ui__input_cursor && _patch_write($scope0_id, "PatchMarkedWrite:input_text", input.text, !_server_guard($scope0_reason, 2)), $fg__input_cursor && $ui__input_text && _patch_write($scope0_id, "PatchMarkedWrite:highlight", highlight, !$sg__input_cursor));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${$template$1}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_text = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_text << 1 | $uf__input_text << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	code_block_default({
		text: input.text,
		cursor: {
			test: /x/g,
			content: _resume(function(h) {
				return h("cursor");
			}, "__tests__/template.marko_0/cursor")
		}
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
