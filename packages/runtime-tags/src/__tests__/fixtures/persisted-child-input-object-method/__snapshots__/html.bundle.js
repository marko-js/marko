// tags/code-block.marko
const $template = "<div> </div>";
_shells({ b: "b;D ;<div> </div>" });
var code_block_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_text = _source_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const highlight = _resume(function(text) {
		return text.replace(input.cursor.test, (m) => `<b>${input.cursor.content((s) => s)}</b>`);
	}, "b0", $scope0_id);
	_html(`<div>${_patch_html($scope0_id, "a", highlight(input.text), void 0, $scope0_reason, 0)}</div>`);
	$scope0_page ? _scope($scope0_id, {
		d: $si__input_text && input.cursor,
		e: _source_if($scope0_reason, 1) && input.text,
		f: $si__input_text && highlight
	}) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "d", input.cursor);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D l"), $template) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	code_block_default({
		text: input.text,
		cursor: {
			test: /x/g,
			content: _resume(function(h) {
				return h("cursor");
			}, "a0")
		}
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [code_block_default]);
