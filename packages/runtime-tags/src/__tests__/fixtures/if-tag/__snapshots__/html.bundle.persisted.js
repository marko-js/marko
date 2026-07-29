// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 0);
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
		f: _serialize_if($scope0_reason, 3) && input.a,
		g: _serialize_if($scope0_reason, 2) && input.b,
		i: _serialize_if($scope0_reason, 5) && input.x,
		j: _serialize_if($scope0_reason, 4) && input.y
	});
}, 1);
