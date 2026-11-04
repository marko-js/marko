// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_options = _write_guard($scope0_reason, 0), $wi__input_options = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let calls = 0;
	_attr_select_value($scope0_id, "a", "b", _resume(function() {
		calls++;
	}, "a0", $scope0_id), () => {
		_html("<select>");
		_for_of(input.options, (option) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(option.value)}>${_text_resume($scope1_id, "b", option.value, $wg__input_options)}</option>${_el_resume($scope1_id, "a", $wg__input_options)}`);
			$wi__input_options && _scope($scope1_id, {});
		}, "id", $scope0_id, "a", $wg__input_options, 1, $wg__input_options, "</select>", 1);
	});
	_attr_select_value($scope0_id, "b", ["b"], _resume(function() {
		calls++;
	}, "a1", $scope0_id), () => {
		_html("<select multiple>");
		_for_of(input.options, (option) => {
			const $scope2_id = _scope_id();
			_html(`<option${_attr_option_value(option.value)}>${_text_resume($scope2_id, "b", option.value, $wg__input_options)}</option>${_el_resume($scope2_id, "a", $wg__input_options)}`);
			$wi__input_options && _scope($scope2_id, {});
		}, "id", $scope0_id, "b", $wg__input_options, 1, $wg__input_options, "</select>", 1);
	});
	_html(`<span>${_text_resume($scope0_id, "c", calls)}</span>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { g: calls });
}, 1);
