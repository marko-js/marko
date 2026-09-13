// tags/code-block.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/code-block.marko": "__tests__/tags/code-block.marko;D ;<div> </div>" });
var code_block_default = _template_persisted("__tests__/tags/code-block.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_text = _source_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const highlight = _resume(function(text) {
		return text.replace(input.cursor.test, (m) => `<b>${input.cursor.content((s) => s)}</b>`);
	}, "__tests__/tags/code-block.marko_0/highlight", $scope0_id);
	_html(`<div>${_patch_html($scope0_id, "#text/0", highlight(input.text), void 0, $scope0_reason, 0)}</div>`);
	$scope0_page ? _scope($scope0_id, {
		input_cursor: $si__input_text && input.cursor,
		input_text: _source_if($scope0_reason, 1) && input.text,
		highlight: $si__input_text && highlight
	}, "__tests__/tags/code-block.marko", 0, {
		input_cursor: ["input.cursor"],
		input_text: ["input.text"],
		highlight: "1:8"
	}) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "input_cursor", input.cursor);
}, 0, 0);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D l"), $template$1) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	code_block_default({
		text: input.text,
		cursor: {
			test: /x/g,
			content: _resume(function(h) {
				return h("cursor");
			}, "__tests__/template.marko_0/cursor")
		}
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [code_block_default]);
