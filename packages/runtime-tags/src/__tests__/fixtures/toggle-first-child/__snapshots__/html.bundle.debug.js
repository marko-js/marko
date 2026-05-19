// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0), $si__input_value = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_html("<div>");
	_if(() => {
		if (value) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(value)}${_el_resume($scope1_id, "#text/0", $sg__input_value)}</span>`);
			$si__input_value && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", $sg__input_value, $sg__input_value, $sg__input_value, 0, 1);
	_html("<span></span><span></span></div>");
	$si__input_value && writeScope($scope0_id, { value }, "__tests__/template.marko", 0, { value: "1:10" });
}, 1);
