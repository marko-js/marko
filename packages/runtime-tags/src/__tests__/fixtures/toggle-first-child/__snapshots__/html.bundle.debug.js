// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.value) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", input.value, $wg__input_value)}</span>`);
			$wi__input_value && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_value, $wg__input_value, 0, 0, 1);
	_html("<span></span><span></span></div>");
	$wi__input_value && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
