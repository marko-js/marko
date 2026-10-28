// tags/label-view.marko
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.flag,
		e: _write_if($scope0_reason, 1) && input.a,
		f: _write_if($scope0_reason, 0) && input.b,
		h: get
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason($wg__input_title << 1 | $wg__input_title << 3 | $wg__input_title << 5);
	const $childScope = _peek_scope_id();
	label_view_default({
		a: up,
		b: low,
		flag: true
	});
	_scope($scope0_id, {
		d: input.title,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);
