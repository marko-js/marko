// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 2), $wg__input_a = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $getX_getter = _hoist($scope0_id, "__tests__/template.marko_0_getX#2:0/hoist");
	_if(() => {
		if (input.a) {
			const $scope2_id = _scope_id();
			const getX = _resume(() => 1, "__tests__/template.marko_2/getX");
			_scope($scope2_id, { getX }, "__tests__/template.marko", "1:2", { getX: "2:10" });
			_assert_hoist(getX);
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_a);
	_if(() => {
		if (!input.a) {
			const $scope1_id = _scope_id();
			const y = $getX_getter;
			let result = "none";
			_if(() => {
				if (input.b) {
					const $scope3_id = _scope_id();
					_html(`<button>${_text_resume($scope3_id, "#text/1", result)}</button>${_el_resume($scope3_id, "#button/0")}`);
					_script($scope3_id, "__tests__/template.marko_3");
					_scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $wg__input_b, 0, 0, 1);
			_scope($scope1_id, {
				y,
				result: _write_if($scope0_reason, 2) && result,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "4:2", {
				y: "5:10",
				result: "6:8"
			});
			return 0;
		}
	}, $scope0_id, "#text/1", _write_guard($scope0_reason, 0), $wg__input_a);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_b: input.b }, "__tests__/template.marko", 0, { input_b: ["input.b"] });
}, 1);
