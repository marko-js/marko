// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 0), $wi__input_a__OR__input_b = _write_if($scope0_reason, 0), $wg__input_x__OR__input_y = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.a + input.b) {
			const $scope1_id = _scope_id();
			_html("Hello");
			$wi__input_a__OR__input_b && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_a__OR__input_b, $wg__input_a__OR__input_b, $wg__input_a__OR__input_b);
	_if(() => {
		if (input.a, input.b) {
			const $scope2_id = _scope_id();
			_html("World");
			$wi__input_a__OR__input_b && _scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", $wg__input_a__OR__input_b, $wg__input_a__OR__input_b, $wg__input_a__OR__input_b);
	_html(`<div>${_text_resume($scope0_id, "c", input.x ? "A" : input.y ? "B" : "C", $wg__input_x__OR__input_y)}</div>`);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		f: _write_if($scope0_reason, 4) && input.a,
		g: _write_if($scope0_reason, 3) && input.b,
		i: _write_if($scope0_reason, 6) && input.x,
		j: _write_if($scope0_reason, 5) && input.y
	});
}, 1);
