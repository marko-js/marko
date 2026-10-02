// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x2 = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const D = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_x = _write_guard($scope1_reason, 0);
		_html(`<div>${_text_resume($scope1_id, "#text/0", input.x, $wg__input_x)}</div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason($wg__input_x2 << 1);
	const $childScope = _peek_scope_id();
	D.content({ x: input.x });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
