// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 0), $si__input_a__OR__input_b = _serialize_if($scope0_reason, 0), $si__input_x__OR__input_y = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.a + input.b) {
			const $scope1_id = _scope_id();
			_html("Hello");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, $sg__input_a__OR__input_b);
	_if(() => {
		if (input.a, input.b) {
			const $scope2_id = _scope_id();
			_html("World");
			writeScope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, $sg__input_a__OR__input_b);
	_html(`<div>${input.x ? "A" : input.y ? "B" : "C"}${_el_resume($scope0_id, "c")}</div>`);
	writeScope($scope0_id, {
		f: $si__input_a__OR__input_b && input.a,
		g: $si__input_a__OR__input_b && input.b,
		i: $si__input_x__OR__input_y && input.x,
		j: $si__input_x__OR__input_y && input.y
	});
}, 1);
