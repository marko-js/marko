// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_options = _write_guard($scope0_reason, 0), $wi__input_options = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let calls = 0;
	_attr_select_value($scope0_id, "#select/0", "b", _resume(function() {
		calls++;
	}, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
		_html("<select>");
		_for_of(input.options, (option) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(option.value)}>${_text_resume($scope1_id, "#text/1", option.value, $wg__input_options)}</option>${_el_resume($scope1_id, "#option/0", $wg__input_options)}`);
			$wi__input_options && _scope($scope1_id, {}, "__tests__/template.marko", "3:4");
		}, "id", $scope0_id, "#select/0", $wg__input_options, 1, $wg__input_options, "</select>", 1);
	});
	_attr_select_value($scope0_id, "#select/1", ["b"], _resume(function() {
		calls++;
	}, "__tests__/template.marko_0/valueChange2", $scope0_id), () => {
		_html("<select multiple>");
		_for_of(input.options, (option) => {
			const $scope2_id = _scope_id();
			_html(`<option${_attr_option_value(option.value)}>${_text_resume($scope2_id, "#text/1", option.value, $wg__input_options)}</option>${_el_resume($scope2_id, "#option/0", $wg__input_options)}`);
			$wi__input_options && _scope($scope2_id, {}, "__tests__/template.marko", "8:4");
		}, "id", $scope0_id, "#select/1", $wg__input_options, 1, $wg__input_options, "</select>", 1);
	});
	_html(`<span>${_text_resume($scope0_id, "#text/2", calls)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { calls }, "__tests__/template.marko", 0, {
		calls: "1:6",
		"ControlledHandler:#select/0": ["valueChange", "2:19"],
		"ControlledHandler:#select/1": ["valueChange", "7:30"]
	});
}, 1);
