// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 2), $wg__input_a = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $getX_getter = _hoist($scope0_id, "a1");
	_if(() => {
		if (input.a) {
			const $scope2_id = _scope_id();
			const getX = _resume(() => 1, "a0");
			_scope($scope2_id, { a: getX });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_a);
	_if(() => {
		if (!input.a) {
			const $scope1_id = _scope_id();
			const y = $getX_getter;
			let result = "none";
			_if(() => {
				if (input.b) {
					const $scope3_id = _scope_id();
					_html(`<button>${_text_resume($scope3_id, "b", result)}</button>${_el_resume($scope3_id, "a")}`);
					_script($scope3_id, "a2");
					_scope($scope3_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_b, 0, 0, 1);
			_scope($scope1_id, {
				b: y,
				c: _write_if($scope0_reason, 2) && result,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), $wg__input_a);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { f: input.b });
}, 1);
