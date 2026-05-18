// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $hoist1_getter = _hoist($scope0_id, "__tests__/template.marko_0_hoist1/hoist");
	const $input_value__closures = new Set();
	const x = $hoist1_getter;
	const hoist1 = _resume(() => input.value, "__tests__/template.marko_0/hoist", $scope0_id);
	_if(() => {
		if (1) {
			const $scope1_id = _scope_id();
			const y = 2;
			const hoist2 = () => input.value;
			_if(() => {
				if (1) {
					const $scope2_id = _scope_id();
					const $if_content2__hoist3_getter = _hoist($scope2_id, "__tests__/template.marko_2_hoist3/hoist");
					const z = $if_content2__hoist3_getter;
					const hoist3 = _resume(() => input.value, "__tests__/template.marko_2/hoist2", $scope2_id);
					_subscribe($input_value__closures, writeScope($scope2_id, {
						hoist3,
						_: _scope_with_id($scope1_id)
					}, "__tests__/template.marko", "8:4", { hoist3: "10:12" }));
					_assert_hoist(hoist3);
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 0, 0);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 0, 0);
	writeScope($scope0_id, {
		input_value: input.value,
		hoist1,
		"ClosureScopes:input_value": _serialize_if($scope0_reason, 0) && $input_value__closures
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		hoist1: "2:8"
	});
	_assert_hoist(hoist1);
}, 1);
