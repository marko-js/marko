// tags/code-block.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/code-block.marko": "__tests__/tags/code-block.marko !;D ;<div> </div>" });
var code_block_default = _template("__tests__/tags/code-block.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_cursor = _server_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_cursor", input.cursor, !$sg__input_cursor);
	const highlight = _bind_resume(function(text) {
		return text.replace(input.cursor.test, (m) => `<b>${input.cursor.content((s) => s)}</b>`);
	}, "__tests__/tags/code-block.marko_0/highlight", $scope0_id);
	_html(`<div>${_patch_html($scope0_id, "#text/0", highlight(input.text), void 0, $scope0_reason, 0)}</div>`);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/code-block.marko_0_input_text#4_highlight#5/init");
	$scope0_page ? _scope($scope0_id, {
		input_cursor: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.cursor,
		input_text: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.text,
		highlight: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && highlight
	}, "__tests__/tags/code-block.marko", 0, {
		input_cursor: ["input.cursor"],
		input_text: ["input.text"],
		highlight: "1:8"
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/code-block.marko_fill0", input.text, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/code-block.marko_fill1", highlight, !$sg__input_cursor));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
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
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
