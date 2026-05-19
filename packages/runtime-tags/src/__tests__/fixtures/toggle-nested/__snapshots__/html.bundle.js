// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 5), $sg__input_value1__OR__input_value = _serialize_guard($scope0_reason, 2), $sg__input_value2 = _serialize_guard($scope0_reason, 6), $sg__input_show = _serialize_guard($scope0_reason, 4), $si__input_show__OR__input_value = _serialize_if($scope0_reason, 0), $si__input_show__OR__input_value2 = _serialize_if($scope0_reason, 1), $si__input_value = _serialize_if($scope0_reason, 5), $si__input_value2 = _serialize_if($scope0_reason, 6), $si__input_show__OR__input_value1__OR__input_value = _serialize_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $value__closures = /* @__PURE__ */ new Set();
	const $value2__closures = /* @__PURE__ */ new Set();
	const { show, value1, value2 } = input;
	_html("<div>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (value1) {
					const $scope2_id = _scope_id();
					_html(`<span>${_escape(value1)}${_el_resume($scope2_id, "a", $sg__input_value)}</span>`);
					$si__input_show__OR__input_value && _subscribe($si__input_value && $value__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", $sg__input_value, $sg__input_value, $sg__input_value1__OR__input_value, 0, 1);
			_if(() => {
				if (value2) {
					const $scope3_id = _scope_id();
					_html(`<span>${_escape(value2)}${_el_resume($scope3_id, "a", $sg__input_value2)}</span>`);
					$si__input_show__OR__input_value2 && _subscribe($si__input_value2 && $value2__closures, writeScope($scope3_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "b", $sg__input_value2, $sg__input_value2, $sg__input_value1__OR__input_value, 0, 1);
			$si__input_show__OR__input_value1__OR__input_value && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _serialize_guard($scope0_reason, 3), $sg__input_show, $sg__input_show, "</div>");
	$si__input_show__OR__input_value1__OR__input_value && writeScope($scope0_id, {
		e: $si__input_show__OR__input_value && value1,
		f: $si__input_show__OR__input_value2 && value2,
		Be: $si__input_value && $value__closures,
		Bf: $si__input_value2 && $value2__closures
	});
}, 1);
