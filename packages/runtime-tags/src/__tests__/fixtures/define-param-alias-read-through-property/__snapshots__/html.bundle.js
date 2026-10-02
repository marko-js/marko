// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x2 = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const D = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_x = _write_guard($scope1_reason, 0);
		_html(`<div>${_text_resume($scope1_id, "a", input.x, $wg__input_x)}</div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason($wg__input_x2 << 1);
	const $childScope = _peek_scope_id();
	D.content({ x: input.x });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
