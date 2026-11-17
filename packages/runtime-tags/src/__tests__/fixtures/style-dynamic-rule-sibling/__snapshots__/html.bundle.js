// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_a0:${_escape_style_value(input.pct + "%")};`)}${_el_mark($scope0_id, "a", _write_guard($scope0_reason, 1))}<div${_attr_class([void 0, input.c])}><div${_attr_class(input.d)}></div>${_el_mark($scope0_id, "c", _write_guard($scope0_reason, 3))}</div>${_el_mark($scope0_id, "b", _write_guard($scope0_reason, 2))}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
