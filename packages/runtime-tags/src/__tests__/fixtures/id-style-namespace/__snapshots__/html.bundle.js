// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>field</label><input${_attr("id", uid)}${_attr_class(uid)}>`);
	_for_to(360, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--idsa0:${_escape_style_value(input.color)};`)}${_el_resume($scope1_id, "a", $wg__input_color)}`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "c", $wg__input_color, 0, 0, 0, 1);
}, 1);
