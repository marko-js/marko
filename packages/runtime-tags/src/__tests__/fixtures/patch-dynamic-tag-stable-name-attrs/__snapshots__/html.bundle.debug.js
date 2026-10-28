// template.marko
const $Row_content__walks = "Db%l";
const $Row_content__template = "<b>R<!></b>";
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($Row_content__walks);
const $setup = [[], []];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b%b/${_w0}&b`)($Row_content__walks)};${((_w0) => `<!><!>${_w0}<!>`)($Row_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<b>R${_text_resume($scope1_id, "#text/0", label, 2, $scope1_reason, 0)}</b>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", Row, { label: input.y }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0, 0, 0, 0);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 1);
	Row.content({ label: input.y });
	_patch_child_end();
	_scope($scope0_id, {
		Row: _unfilled_if($scope0_reason, 0) && Row,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { Row: "1:9" });
}, 1);
