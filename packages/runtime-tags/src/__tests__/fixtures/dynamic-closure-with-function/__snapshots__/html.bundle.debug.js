// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_b = _serialize_guard($scope0_reason, 5), $sg__input_a = _serialize_guard($scope0_reason, 4), $si__input_a__OR__input_b = _serialize_if($scope0_reason, 1), $si__input_c = _serialize_if($scope0_reason, 3), $si__input_c__OR__input_a__OR__input_b = _serialize_if($scope0_reason, 2);
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
					_html(`<div>${_escape(bar(foo))}${_el_resume($scope2_id, "#text/0", _serialize_guard($scope0_reason, 3))}</div>`);
					$si__input_c__OR__input_a__OR__input_b && _subscribe($si__input_c && $bar2__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:3"));
					return 0;
				}
			}, $scope1_id, "#text/0", $sg__input_b, $sg__input_b, $sg__input_b, 0, 1);
			_serialize_if($scope0_reason, 0) && writeScope($scope1_id, {
				foo,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:1", { foo: "4:9" });
			return 0;
		}
	}, $scope0_id, "#text/0", _serialize_guard($scope0_reason, 1), $sg__input_a, $sg__input_a);
	$si__input_c__OR__input_a__OR__input_b && writeScope($scope0_id, {
		input_c: $si__input_a__OR__input_b && input.c,
		input_b: _serialize_if($scope0_reason, 4) && input.b,
		bar: $si__input_a__OR__input_b && bar,
		"ClosureScopes:bar": $si__input_c && $bar2__closures
	}, "__tests__/template.marko", 0, {
		input_c: ["input.c"],
		input_b: ["input.b"],
		bar: "1:7"
	});
}, 1);
