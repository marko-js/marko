// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>field</label><input${_attr("id", uid)}>`);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
					$wi__input_nested && _scope($scope4_id, {}, "__tests__/template.marko", "1:29");
					return 0;
				}
			}, $scope1_id, "#text/1", $wg__input_nested, $wg__input_nested);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: $wi__input_nested && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		} else if (input.mode === 1) {
			const $scope2_id = _scope_id();
			field_default({});
			field_default({});
			field_default({});
			field_default({});
			$wi__input_mode && _scope($scope2_id, {}, "__tests__/template.marko", "2:2");
			return 1;
		} else {
			const $scope3_id = _scope_id();
			field_default({});
			$wi__input_mode && _scope($scope3_id, {}, "__tests__/template.marko", "3:2");
			return 2;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0) || $wg__input_mode, $wg__input_mode);
	field_default({});
	field_default({});
	_if(() => {
		if (input.other) {
			const $scope5_id = _scope_id();
			field_default({});
			_write_if($scope0_reason, 4) && _scope($scope5_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/3", $wg__input_other, $wg__input_other);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_nested: $wi__input_mode && input.nested }, "__tests__/template.marko", 0, { input_nested: ["input.nested"] });
}, 1);
