// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_value = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { value } = input;
	_html_opens("__tests__/template.marko:2:1"), _html(`<em>Testing</em> ${_sep($sg__input_value)}`), _html_raw("__tests__/template.marko:2:18"), _html(_unescaped(value)), _html(_el_resume($scope0_id, "#text/0", $sg__input_value));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
