// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 0), $si__input_a__OR__input_b = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.a + input.b) {
			const $scope1_id = _scope_id();
			_html("Hello");
			$si__input_a__OR__input_b && writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $sg__input_a__OR__input_b, $sg__input_a__OR__input_b, $sg__input_a__OR__input_b);
	_if(() => {
		if (input.a, input.b) {
			const $scope2_id = _scope_id();
			_html("World");
			$si__input_a__OR__input_b && writeScope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", $sg__input_a__OR__input_b, $sg__input_a__OR__input_b, $sg__input_a__OR__input_b);
	_html(`<div>${input.x ? "A" : input.y ? "B" : "C"}${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 1))}</div>`);
	_serialize_if($scope0_reason, 2) && writeScope($scope0_id, {
		f: _serialize_if($scope0_reason, 4) && input.a,
		g: _serialize_if($scope0_reason, 3) && input.b,
		i: _serialize_if($scope0_reason, 6) && input.x,
		j: _serialize_if($scope0_reason, 5) && input.y
	});
}, 1);
