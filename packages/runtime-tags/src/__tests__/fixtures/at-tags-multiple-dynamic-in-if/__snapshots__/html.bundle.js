// tags/custom-tag/index.marko
var custom_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x_value = _serialize_guard($scope0_reason, 1), $sg__input_y_value = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { x, y } = input;
	_html(`<div>x: ${_sep($sg__input_x_value)}${_escape(x?.value)}${_el_resume($scope0_id, "a", $sg__input_x_value)} y: ${_sep($sg__input_y_value)}${_escape(y?.value)}${_el_resume($scope0_id, "b", $sg__input_y_value)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_cond = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { cond } = input;
	const $childScope = _peek_scope_id();
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
	custom_tag_default({
		x: $x,
		y: $y
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
