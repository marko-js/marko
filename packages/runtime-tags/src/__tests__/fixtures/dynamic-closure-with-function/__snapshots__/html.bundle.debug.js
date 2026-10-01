// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_c = _write_guard($scope0_reason, 3), $wg__input_b = _write_guard($scope0_reason, 5), $wi__input_c__OR__input_a__OR__input_b = _write_if($scope0_reason, 2), $wg__input_a = _write_guard($scope0_reason, 4), $wi__input_a__OR__input_b = _write_if($scope0_reason, 1), $wi__input_c = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $bar2__closures = new Set();
	const bar = _resume(function(test) {
		return input.c + test;
	}, "__tests__/template.marko_0/bar", $scope0_id);
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			const foo = "foo";
			_if(() => {
				if (input.b) {
					const $scope2_id = _scope_id();
					_html(`<div>${_text_resume($scope2_id, "#text/0", bar(foo), $wg__input_c)}</div>`);
					$wi__input_c__OR__input_a__OR__input_b && _subscribe($wi__input_c && $bar2__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:3"), "__tests__/template.marko_2_bar#0:6/subscribe", $wg__input_c);
					return 0;
				}
			}, $scope1_id, "#text/0", $wg__input_b, $wg__input_b, $wg__input_b, 0, 1);
			$wi__input_c__OR__input_a__OR__input_b && _scope($scope1_id, {
				foo: _write_if($scope0_reason, 0) && foo,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:1", { foo: "4:9" });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_a, $wg__input_a);
	$wi__input_c__OR__input_a__OR__input_b && _scope($scope0_id, {
		input_c: $wi__input_a__OR__input_b && input.c,
		input_b: _write_if($scope0_reason, 4) && input.b,
		bar: $wi__input_a__OR__input_b && bar,
		"ClosureScopes:bar/8": $wi__input_c && $bar2__closures
	}, "__tests__/template.marko", 0, {
		input_c: ["input.c"],
		input_b: ["input.b"],
		bar: "1:7"
	});
}, 1);
