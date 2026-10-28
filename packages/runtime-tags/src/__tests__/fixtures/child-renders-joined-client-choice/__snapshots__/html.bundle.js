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
	_scope_reason();
	const $scope0_id = _scope_id();
	let upper = false;
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(162);
	const $childScope = _peek_scope_id();
	label_view_default({
		a: low,
		b: _resume(() => "x", "a2"),
		flag: true
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	});
}, 1);
