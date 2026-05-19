// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_b = _serialize_guard($scope0_reason, 5), $sg__input_a = _serialize_guard($scope0_reason, 4), $si__input_a__OR__input_b = _serialize_if($scope0_reason, 1), $si__input_c = _serialize_if($scope0_reason, 3), $si__input_c__OR__input_a__OR__input_b = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $bar2__closures = /* @__PURE__ */ new Set();
	const bar = _resume(function(test) {
		return input.c + test;
	}, "a0", $scope0_id);
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			const foo = "foo";
			_if(() => {
				if (input.b) {
					const $scope2_id = _scope_id();
					_html(`<div>${_escape(bar(foo))}${_el_resume($scope2_id, "a", _serialize_guard($scope0_reason, 3))}</div>`);
					$si__input_c__OR__input_a__OR__input_b && _subscribe($si__input_c && $bar2__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", $sg__input_b, $sg__input_b, $sg__input_b, 0, 1);
			_serialize_if($scope0_reason, 0) && writeScope($scope1_id, {
				b: foo,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _serialize_guard($scope0_reason, 1), $sg__input_a, $sg__input_a);
	$si__input_c__OR__input_a__OR__input_b && writeScope($scope0_id, {
		d: $si__input_a__OR__input_b && input.c,
		f: _serialize_if($scope0_reason, 4) && input.b,
		g: $si__input_a__OR__input_b && bar,
		Bg: $si__input_c && $bar2__closures
	});
}, 1);
