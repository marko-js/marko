// tags/custom-tag/index.marko
var custom_tag_default = _template("__tests__/tags/custom-tag/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x_value = _write_guard($scope0_reason, 1), $wg__input_y_value = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { x, y } = input;
	_html(`<div>x: ${_text_resume($scope0_id, "#text/0", x?.value, $wg__input_x_value * 2)} y: ${_text_resume($scope0_id, "#text/1", y?.value, $wg__input_y_value * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/custom-tag/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_cond = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { cond } = input;
	_set_scope_reason($wg__input_cond << 1 | $wg__input_cond << 3 | $wg__input_cond << 5);
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
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
