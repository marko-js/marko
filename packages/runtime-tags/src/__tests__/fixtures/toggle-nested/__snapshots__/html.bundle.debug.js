// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 5), $sg__input_value1__OR__input_value = _serialize_guard($scope0_reason, 2), $sg__input_value2 = _serialize_guard($scope0_reason, 6), $sg__input_show = _serialize_guard($scope0_reason, 4), $si__input_show__OR__input_value = _serialize_if($scope0_reason, 0), $si__input_show__OR__input_value2 = _serialize_if($scope0_reason, 1), $si__input_show__OR__input_value1__OR__input_value = _serialize_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	const $value2__closures = new Set();
	const { show, value1, value2 } = input;
	_html("<div>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (value1) {
					const $scope2_id = _scope_id();
					_html(`<span>${_escape(value1)}${_el_resume($scope2_id, "#text/0", $sg__input_value)}</span>`);
					$si__input_show__OR__input_value && _subscribe($value__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"));
					return 0;
				}
			}, $scope1_id, "#text/0", $sg__input_value, $sg__input_value, $sg__input_value1__OR__input_value, 0, 1);
			_if(() => {
				if (value2) {
					const $scope3_id = _scope_id();
					_html(`<span>${_escape(value2)}${_el_resume($scope3_id, "#text/0", $sg__input_value2)}</span>`);
					$si__input_show__OR__input_value2 && _subscribe($value2__closures, writeScope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6"));
					return 0;
				}
			}, $scope1_id, "#text/1", $sg__input_value2, $sg__input_value2, $sg__input_value1__OR__input_value, 0, 1);
			$si__input_show__OR__input_value1__OR__input_value && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#div/0", _serialize_guard($scope0_reason, 3), $sg__input_show, $sg__input_show, "</div>");
	$si__input_show__OR__input_value1__OR__input_value && writeScope($scope0_id, {
		value1: $si__input_show__OR__input_value && value1,
		value2: $si__input_show__OR__input_value2 && value2,
		"ClosureScopes:value1": _serialize_if($scope0_reason, 5) && $value__closures,
		"ClosureScopes:value2": _serialize_if($scope0_reason, 6) && $value2__closures
	}, "__tests__/template.marko", 0, {
		value1: "1:15",
		value2: "1:23"
	});
}, 1);
