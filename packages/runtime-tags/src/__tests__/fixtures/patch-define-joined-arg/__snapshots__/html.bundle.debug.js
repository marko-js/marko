// template.marko
const $Card_content__walks = " b";
const $Card_content__template = "<a>x</a>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks);
const $setup = [[], []];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0) => `b/${_w0}&b`)($Card_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Card = { content: _content("__tests__/template.marko_1*content", ({ href }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<a${_attr("href", href, $scope1_id, "#a/0", $scope1_reason, 0)}>x</a>${_el_resume($scope1_id, "#a/0", _mask_group($scope1_reason, 0))}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	Card.content({ href: input.q + input.item });
	_patch_child_end();
	_scope($scope0_id, {
		input_q: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.q,
		input_item: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.item,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_q: ["input.q"],
		input_item: ["input.item"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.q, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.item, !_server_guard($scope0_reason, 2)));
}, 1);
