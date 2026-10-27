// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 4), $wi__input_x = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let out = "";
	_if(() => {
		if (input.x) {
			const $scope1_id = _scope_id();
			const v = input.a;
			_if(() => {
				if (input.y) {
					const $scope2_id = _scope_id();
					_html(`<button class=read>${_text_resume($scope2_id, "b", v, _write_guard($scope0_reason, 3))}</button>${_el_resume($scope2_id, "a")}`);
					_script($scope2_id, "b0");
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", _write_guard($scope0_reason, 0), $wg__input_y, 0, 0, 1);
			_scope($scope1_id, {
				b: v,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), _write_guard($scope0_reason, 2));
	_html(`<output>${_text_resume($scope0_id, "b", out)}</output>`);
	_scope($scope0_id, {
		f: $wi__input_x && input.a,
		g: $wi__input_x && input.y
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(522 | (_write_guard($scope0_reason, 1) << 5 | _write_guard($scope0_reason, 0) << 7));
	const $childScope = _peek_scope_id();
	panel_default({
		a: input.a,
		x: input.x,
		y
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: y,
		b: _existing_scope($childScope)
	});
}, 1);
