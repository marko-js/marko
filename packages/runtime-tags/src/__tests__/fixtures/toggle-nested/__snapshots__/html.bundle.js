// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 4), $wg__input_value2 = _write_guard($scope0_reason, 5), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wi__input_value = _write_if($scope0_reason, 4), $wi__input_value2 = _write_if($scope0_reason, 5), $wi__input_show__OR__input_value1__OR__input_value = _write_if($scope0_reason, 2);
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
					_html(`<span>${_text_resume($scope2_id, "a", value1, $wg__input_value)}</span>`);
					_write_if($scope0_reason, 0) && _subscribe($wi__input_value && $value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_value);
					return 0;
				}
			}, $scope1_id, "a", $wg__input_value, $wg__input_value, $wg__input_value, 0, 1);
			_if(() => {
				if (value2) {
					const $scope3_id = _scope_id();
					_html(`<span>${_text_resume($scope3_id, "a", value2, $wg__input_value2)}</span>`);
					_write_if($scope0_reason, 1) && _subscribe($wi__input_value2 && $value2__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_value2);
					return 0;
				}
			}, $scope1_id, "b", $wg__input_value2, $wg__input_value2, $wg__input_value2, 0, 1);
			$wi__input_show__OR__input_value1__OR__input_value && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 2), $wg__input_show, $wg__input_show, "</div>");
	$wi__input_show__OR__input_value1__OR__input_value && _scope($scope0_id, {
		e: $wi__input_show && value1,
		f: $wi__input_show && value2,
		g: $wi__input_value && $value__closures,
		h: $wi__input_value2 && $value2__closures
	});
}, 1);
