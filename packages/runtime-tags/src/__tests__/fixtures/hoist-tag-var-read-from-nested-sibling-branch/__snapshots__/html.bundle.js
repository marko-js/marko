// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.a) {
					const $scope2_id = _scope_id();
					const getLabel = _resume(() => "a", "a0");
					_scope($scope2_id, { a: getLabel });
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_a);
			_if(() => {
				if (!input.a) {
					const $scope3_id = _scope_id();
					_html(`<button>${_text_resume($scope3_id, "b", "none")}</button>${_el_resume($scope3_id, "a")}`);
					_script($scope3_id, "a1");
					_scope($scope3_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "b", $wg__input_a, $wg__input_a, 0, 0, 1);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.a });
}, 1);
