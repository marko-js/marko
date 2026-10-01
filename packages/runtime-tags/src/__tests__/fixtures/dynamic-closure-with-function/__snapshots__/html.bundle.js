// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_c = _write_guard($scope0_reason, 3), $wg__input_b = _write_guard($scope0_reason, 5), $wi__input_c__OR__input_a__OR__input_b = _write_if($scope0_reason, 2), $wg__input_a = _write_guard($scope0_reason, 4), $wi__input_a__OR__input_b = _write_if($scope0_reason, 1), $wi__input_c = _write_if($scope0_reason, 3);
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
					_html(`<div>${_text_resume($scope2_id, "a", bar(foo), $wg__input_c)}</div>`);
					$wi__input_c__OR__input_a__OR__input_b && _subscribe($wi__input_c && $bar2__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_c);
					return 0;
				}
			}, $scope1_id, "a", $wg__input_b, $wg__input_b, $wg__input_b, 0, 1);
			$wi__input_c__OR__input_a__OR__input_b && _scope($scope1_id, {
				b: _write_if($scope0_reason, 0) && foo,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_a, $wg__input_a);
	$wi__input_c__OR__input_a__OR__input_b && _scope($scope0_id, {
		d: $wi__input_a__OR__input_b && input.c,
		f: _write_if($scope0_reason, 4) && input.b,
		g: $wi__input_a__OR__input_b && bar,
		i: $wi__input_c && $bar2__closures
	});
}, 1);
