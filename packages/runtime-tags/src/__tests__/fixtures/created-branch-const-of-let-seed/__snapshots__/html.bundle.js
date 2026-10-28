// tags/view.marko
var view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = input.x;
			const c = input.y * 2;
			_html(`<span>${_text_resume($scope1_id, "a", a + c)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, {
				c: a,
				e: c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		e: input.x,
		f: input.y
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_x__OR__input_y = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | $wg__input_show__OR__input_x__OR__input_y << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	view_default({
		show: input.show,
		x: input.x,
		y: input.y
	});
	_write_if($scope0_reason, 1) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
