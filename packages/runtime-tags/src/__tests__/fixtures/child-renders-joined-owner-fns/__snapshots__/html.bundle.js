// tags/label-view.marko
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag__OR__input_a__OR__input_b = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<p>${_text_resume($scope0_id, "a", get(), $wg__input_flag__OR__input_a__OR__input_b)}</p>`);
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.flag,
		e: _write_if($scope0_reason, 1) && input.a,
		f: _write_if($scope0_reason, 0) && input.b
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason($wg__input_title << 1 | $wg__input_title << 3 | $wg__input_title << 5 | $wg__input_title << 7);
	const $childScope = _peek_scope_id();
	label_view_default({
		a: up,
		b: low,
		flag: true
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: input.title,
		a: _existing_scope($childScope)
	});
}, 1);
