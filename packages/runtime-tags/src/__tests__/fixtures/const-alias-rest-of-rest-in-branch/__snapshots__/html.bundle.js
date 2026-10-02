// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_o = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { a, ...r1 } = input.o;
	const { a: $a, b: $b, ...r2 } = r1;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span${_attrs(r2, "a", $scope1_id, "span")}>${_text_resume($scope1_id, "b", r1.b, $wg__input_o)}</span>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_html(`<div>${_text_resume($scope0_id, "b", a, $wg__input_o)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		i: $wi__input_show && r1.b,
		j: $wi__input_show && r2
	});
}, 1);
