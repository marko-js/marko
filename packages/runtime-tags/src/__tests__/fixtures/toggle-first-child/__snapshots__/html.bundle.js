// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_html("<div>");
	_if(() => {
		if (value) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(value)}${_el_resume($scope1_id, "a", $sg__input_value)}</span>`);
			$si__input_value && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $sg__input_value, $sg__input_value, $sg__input_value, 0, 1, 1);
	_html("<span></span><span></span></div>");
	$si__input_value && writeScope($scope0_id, { d: value });
}, 1);
