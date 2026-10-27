// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
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
					_html(`<button class=read>${_text_resume($scope2_id, "#text/1", v, _write_guard($scope0_reason, 3))}</button>${_el_resume($scope2_id, "#button/0")}`);
					_script($scope2_id, "__tests__/tags/panel.marko_2");
					_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "4:4");
					return 0;
				}
			}, $scope1_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_y, 0, 0, 1);
			_scope($scope1_id, {
				v,
				_: _scope_with_id($scope0_id)
			}, "__tests__/tags/panel.marko", "2:2", { v: "3:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), _write_guard($scope0_reason, 2));
	_html(`<output>${_text_resume($scope0_id, "#text/1", out)}</output>`);
	_scope($scope0_id, {
		input_a: $wi__input_x && input.a,
		input_y: $wi__input_x && input.y
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		input_y: ["input.y"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(522 | (_write_guard($scope0_reason, 1) << 5 | _write_guard($scope0_reason, 0) << 7));
	const $childScope = _peek_scope_id();
	panel_default({
		a: input.a,
		x: input.x,
		y
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		y,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { y: "1:6" });
}, 1);
