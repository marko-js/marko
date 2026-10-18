// tags/code-block.marko
const $template = "<div> </div>";
_shells({ b: "b;D ;<div> </div>" });
var code_block_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const highlight = _resume(function(text) {
		return text.replace(input.cursor.test, (m) => `<b>${input.cursor.content((s) => s)}</b>`);
	}, "b0", $scope0_id);
	_html(`<div>${_patch_html($scope0_id, "a", highlight(input.text), void 0, $scope0_reason, 0)}</div>`);
	_patch_write($scope0_id, "we", input.text, 1);
	_patch_write($scope0_id, "wf", highlight, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b3");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.cursor,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.text,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && highlight
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb1", input.text, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vb2", highlight, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 1) && (_unfilled_if($scope0_reason, 0) || _unfilled_if()) && _patch_write($scope0_id, "wd", input.cursor, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0) => `a;${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "a");
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
}, 1);
