// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.a) {
					const $scope2_id = _scope_id();
					const getLabel = _resume(() => "a", "__tests__/template.marko_2/getLabel");
					_scope($scope2_id, { getLabel }, "__tests__/template.marko", "2:4", { getLabel: "3:12" });
					_assert_hoist(getLabel);
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $wg__input_a);
			_if(() => {
				if (!input.a) {
					const $scope3_id = _scope_id();
					let label = "none";
					_html(`<button>${_text_resume($scope3_id, "#text/1", label)}</button>${_el_resume($scope3_id, "#button/0")}`);
					_script($scope3_id, "__tests__/template.marko_3");
					_scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4");
					return 0;
				}
			}, $scope1_id, "#text/1", $wg__input_a, $wg__input_a, 0, 0, 1);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_a: input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] });
}, 1);
