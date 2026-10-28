// template.marko
const $Card_content__walks = " b";
const $Card_content__template = "<a>x</a>";
_shells({ a: /*@__PURE__*/ (() => `a !;${((_w0) => `b/${_w0}&b`)($Card_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Card = { content: _content("a0", ({ href }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<a${_attr("href", href, $scope1_id, "aa$href", $scope1_reason, 0)}>x</a>${_el_resume($scope1_id, "a", _mask_group($scope1_reason, 0))}`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Card.content({ href: input.q + input.item });
	_patch_child_end();
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.q,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.item,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va1", input.q, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.item, !_server_guard($scope0_reason, 2)));
}, 1);
