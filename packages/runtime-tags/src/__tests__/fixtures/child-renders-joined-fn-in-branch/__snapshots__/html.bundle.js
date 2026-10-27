// tags/label-view.marko
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag__OR__input_a__OR__input_b = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let open = true;
	const get = input.flag ? input.a : input.b;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", get(), $wg__input_flag__OR__input_a__OR__input_b)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<span>x</span>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.flag,
		f: _write_if($scope0_reason, 1) && input.a,
		g: _write_if($scope0_reason, 0) && input.b,
		i: open,
		j: get
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let upper = false;
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(162 | _write_guard($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	label_view_default({
		a: low,
		b: low,
		flag: true
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	});
}, 1);
