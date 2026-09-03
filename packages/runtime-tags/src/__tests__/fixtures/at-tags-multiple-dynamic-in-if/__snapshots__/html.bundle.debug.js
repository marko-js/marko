// tags/custom-tag/index.marko
var custom_tag_default = _template("__tests__/tags/custom-tag/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x_value = _serialize_guard($scope0_reason, 1), $sg__input_y_value = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { x, y } = input;
	_html(`<div>x: ${_text_resume($scope0_id, "#text/0", x?.value, $sg__input_x_value * 2)} y: ${_text_resume($scope0_id, "#text/1", y?.value, $sg__input_y_value * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/custom-tag/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_cond = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { cond } = input;
	_set_serialize_reason({
		0: $sg__input_cond,
		1: $sg__input_cond,
		2: $sg__input_cond
	});
	let $x;
	let $y;
	if (cond) {
		$x = attrTag({ value: 1 });
		$y = attrTag({ value: 2 });
	}
	const $childScope = _peek_scope_id();
	custom_tag_default({
		x: $x,
		y: $y
	});
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
