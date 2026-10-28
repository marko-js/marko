// tags/field.marko
var field_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>field</label><input${_attr("id", uid)}>`);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_nested = _write_guard($scope0_reason, 3), $wi__input_nested = _write_if($scope0_reason, 3), $wi__input_mode = _write_if($scope0_reason, 2), $wg__input_mode = _write_guard($scope0_reason, 2), $wg__input_other = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.mode === 0) {
			const $scope1_id = _scope_id();
			field_default({});
			_if(() => {
				if (input.nested) {
					const $scope4_id = _scope_id();
					field_default({});
					field_default({});
					$wi__input_nested && _scope($scope4_id, {});
					return 0;
				}
			}, $scope1_id, "b", $wg__input_nested, $wg__input_nested);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: $wi__input_nested && _scope_with_id($scope0_id) });
			return 0;
		} else if (input.mode === 1) {
			const $scope2_id = _scope_id();
			field_default({});
			field_default({});
			field_default({});
			field_default({});
			$wi__input_mode && _scope($scope2_id, {});
			return 1;
		} else {
			const $scope3_id = _scope_id();
			field_default({});
			$wi__input_mode && _scope($scope3_id, {});
			return 2;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0) || $wg__input_mode, $wg__input_mode);
	field_default({});
	field_default({});
	_if(() => {
		if (input.other) {
			const $scope5_id = _scope_id();
			field_default({});
			_write_if($scope0_reason, 4) && _scope($scope5_id, {});
			return 0;
		}
	}, $scope0_id, "d", $wg__input_other, $wg__input_other);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { h: $wi__input_mode && input.nested });
}, 1);
