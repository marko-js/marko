// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", typeof input.a, $wg__input_a)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 2), $wg__input_a = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $y_getter = _hoist($scope0_id, "__tests__/template.marko_0_y#7/hoist");
	const $x_getter = _hoist($scope0_id, "__tests__/template.marko_0_x#2:0/hoist");
	_if(() => {
		if (input.a) {
			const $scope2_id = _scope_id();
			const x = _resume(() => 1, "__tests__/template.marko_2/x");
			_scope($scope2_id, { x }, "__tests__/template.marko", "1:2", { x: "2:10" });
			_assert_hoist(x);
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_a);
	_if(() => {
		if (!input.a) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.b) {
					const $scope3_id = _scope_id();
					child_default($x_getter);
					_scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4");
					return 0;
				}
			}, $scope1_id, "#text/0", $wg__input_b, $wg__input_b, 0, 0, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", _write_guard($scope0_reason, 0), $wg__input_a);
	child_default($y_getter);
	const y = _resume(() => 2, "__tests__/template.marko_0/y");
	_scope($scope0_id, {
		input_b: _write_if($scope0_reason, 1) && input.b,
		y
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		y: "10:8"
	});
	_assert_hoist(y);
}, 1);
