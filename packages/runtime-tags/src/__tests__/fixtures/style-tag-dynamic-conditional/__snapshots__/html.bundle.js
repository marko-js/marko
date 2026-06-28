// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`${_style_html(`--M_a0:${_escape_style_value(input.color)};`)}${_el_resume($scope1_id, "a", _serialize_guard($scope0_reason, 2))}<div class=box>Hi</div>`);
			_serialize_if($scope0_reason, 0) && writeScope($scope1_id, { _: _serialize_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _serialize_guard($scope0_reason, 0), $sg__input_show, $sg__input_show);
	_html("<span>after</span>");
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, { e: input.color });
}, 1);
