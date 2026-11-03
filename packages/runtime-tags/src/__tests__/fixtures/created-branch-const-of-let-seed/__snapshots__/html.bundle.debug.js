// tags/view.marko
var view_default = _template("__tests__/tags/view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = input.x;
			let b = input.y;
			const c = b * 2;
			_html(`<span>${_text_resume($scope1_id, "#text/0", a + c)}</span><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/tags/view.marko_1");
			_scope($scope1_id, {
				a,
				c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}, "__tests__/tags/view.marko", "1:2", {
				a: "2:8",
				c: "4:10"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_show);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_x: input.x,
		input_y: input.y
	}, "__tests__/tags/view.marko", 0, {
		input_x: ["input.x"],
		input_y: ["input.y"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_x__OR__input_y = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | $wg__input_show__OR__input_x__OR__input_y << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	view_default({
		show: input.show,
		x: input.x,
		y: input.y
	});
	_write_if($scope0_reason, 1) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
