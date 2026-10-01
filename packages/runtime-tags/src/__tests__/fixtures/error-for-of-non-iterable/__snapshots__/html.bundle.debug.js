// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.value, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", item, $wg__input_value)}</li>`);
		$wi__input_value && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_value, $wg__input_value, $wg__input_value, 0, 1);
	$wi__input_value && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
