// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show__OR__input_editable = _serialize_guard($scope0_reason, 0), $sg__input_editable = _serialize_guard($scope0_reason, 2), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>shown</div>${_el_resume($scope1_id, "a")}`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show__OR__input_editable, 0, 1);
	_if(() => {
		if (input.editable) {
			const $scope2_id = _scope_id();
			_html(`<button>click</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", $sg__input_editable, $sg__input_editable, $sg__input_show__OR__input_editable, 0, 1);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
