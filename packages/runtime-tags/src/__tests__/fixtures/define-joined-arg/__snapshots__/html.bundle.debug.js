// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_q__OR__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content("__tests__/template.marko_1*content", ({ href }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__href = _write_guard($scope1_reason, 0);
		_html(`<a${_attr("href", href)}>x</a>${_el_resume($scope1_id, "#a/0", $wg__href)}`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason($wg__input_q__OR__input_item << 1);
	const $childScope = _peek_scope_id();
	Card.content({ href: input.q + input.item });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_q: _write_if($scope0_reason, 2) && input.q,
		input_item: _write_if($scope0_reason, 1) && input.item,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_q: ["input.q"],
		input_item: ["input.item"]
	});
}, 1);
