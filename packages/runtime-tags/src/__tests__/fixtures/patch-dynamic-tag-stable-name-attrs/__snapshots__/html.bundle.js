// template.marko
const $Row_content__walks = "Db%l";
const $Row_content__template = "<b>R<!></b>";
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b%b/${_w0}&b`)($Row_content__walks)};${((_w0) => `<!><!>${_w0}<!>`)($Row_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<b>R${_text_resume($scope1_id, "a", label, 2, $scope1_reason, 0)}</b>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", Row, { label: input.y }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0, 0, 0, 0);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 1);
	Row.content({ label: input.y });
	_patch_child_end();
	_scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && Row,
		b: _existing_scope($childScope)
	});
}, 1);
