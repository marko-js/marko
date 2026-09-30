// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_editable = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>shown</div>${_el_resume($scope1_id, "a")}`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 0, 0, 1);
	_if(() => {
		if (input.editable) {
			const $scope2_id = _scope_id();
			_html(`<button>click</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", $wg__input_editable, $wg__input_editable, 0, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
