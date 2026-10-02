// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", typeof input.a, $wg__input_a)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 2), $wg__input_a = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $y_getter = _hoist($scope0_id, "a2");
	const $x_getter = _hoist($scope0_id, "a3");
	_if(() => {
		if (input.a) {
			const $scope2_id = _scope_id();
			const x = _resume(() => 1, "a0");
			_scope($scope2_id, { a: x });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_a);
	_if(() => {
		if (!input.a) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.b) {
					const $scope3_id = _scope_id();
					child_default($x_getter);
					_scope($scope3_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", $wg__input_b, $wg__input_b, 0, 0, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), $wg__input_a);
	child_default($y_getter);
	const y = _resume(() => 2, "a1");
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 1) && input.b,
		h: y
	});
}, 1);
