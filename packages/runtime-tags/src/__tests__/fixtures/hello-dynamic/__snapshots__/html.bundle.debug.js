// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_name = _serialize_guard($scope0_reason, 1), $sg__input_missing = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`Hello ${_sep($sg__input_name)}${_escape(input.name)}${_el_resume($scope0_id, "#text/0", $sg__input_name)}! Hello ${_sep($sg__input_name)}`), _html_raw("__tests__/template.marko:1:31"), _html(_unescaped(input.name)), _html(`${_el_resume($scope0_id, "#text/1", $sg__input_name)}! Hello ${_sep($sg__input_missing)}`), _html_raw("__tests__/template.marko:1:53"), _html(_unescaped(input.missing)), _html(`${_el_resume($scope0_id, "#text/2", $sg__input_missing)}!`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
