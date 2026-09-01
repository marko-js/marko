// tags/custom-tag/index.marko
var custom_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { x, y } = input;
	_html(`<div>x: ${_text_resume($scope0_id, "a", x?.value, _serialize_guard($scope0_reason, 1) * 2)} y: ${_text_resume($scope0_id, "b", y?.value, _serialize_guard($scope0_reason, 2) * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
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
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
