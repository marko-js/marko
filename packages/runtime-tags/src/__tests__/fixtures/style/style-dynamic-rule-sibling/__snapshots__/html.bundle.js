// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_pct = _serialize_guard($scope0_reason, 1), $sg__input_c = _serialize_guard($scope0_reason, 2), $sg__input_d = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_a0:${_escape_style_value(input.pct + "%")};`)}${_el_resume($scope0_id, "a", $sg__input_pct)}<div${_attr_class([void 0, input.c])}><div${_attr_class(input.d)}></div>${_el_resume($scope0_id, "c", $sg__input_d)}</div>${_el_resume($scope0_id, "b", $sg__input_c)}`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
