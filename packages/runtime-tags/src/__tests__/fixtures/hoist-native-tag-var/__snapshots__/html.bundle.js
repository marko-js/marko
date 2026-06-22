// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0");
	writeScope($scope0_id, { b: input });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $el_getter = _hoist($scope0_id, "a0");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					const $el = _el($scope2_id, "a1");
					_html(`<div></div>${_el_resume($scope2_id, "a")}`);
					child_default({ value: $el });
					writeScope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_show, $sg__input_show, 0, 1);
			writeScope($scope1_id, { _: $si__input_show && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show);
	child_default({ value: $el_getter });
	_html("<hr>");
	_if(() => {
		{
			const $scope3_id = _scope_id();
			_html(`<div></div>${_el_resume($scope3_id, "a")}`);
			writeScope($scope3_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 0, $sg__input_show, 0, 1, 1);
	_script($scope0_id, "a2");
	$si__input_show && writeScope($scope0_id, { f: input.show });
}, 1);
