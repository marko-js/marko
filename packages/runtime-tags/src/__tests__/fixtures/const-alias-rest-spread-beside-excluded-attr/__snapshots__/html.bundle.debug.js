// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.a, $wg__input_a)}|${_text_resume($scope0_id, "#text/1", input.b, $wg__input_b * 2)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__rest_a = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { skip, ...rest } = input;
	_set_scope_reason($wg__rest_a << 1 | $wg__rest_a << 3);
	const $childScope = _peek_scope_id();
	child_default({
		...rest,
		b: "z"
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
