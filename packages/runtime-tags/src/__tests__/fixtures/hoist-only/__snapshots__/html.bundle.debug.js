// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_value = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $hoist1_getter = _hoist($scope0_id, "__tests__/template.marko_0_hoist1#6/hoist");
	const $input_value__closures = new Set();
	const x = $hoist1_getter;
	const later = _resume(() => $hoist1_getter, "__tests__/template.marko_0/later", $scope0_id);
	const hoist1 = _resume(() => input.value, "__tests__/template.marko_0/hoist", $scope0_id);
	if (1) {
		const $scope1_id = _scope_id();
		_if(() => {
			if (1) {
				const $scope2_id = _scope_id();
				const $if_content2__hoist3_getter = _hoist($scope2_id, "__tests__/template.marko_2_hoist3#2/hoist");
				const z = $if_content2__hoist3_getter;
				const hoist3 = _resume(() => input.value, "__tests__/template.marko_2/hoist2", $scope2_id);
				_script($scope2_id, "__tests__/template.marko_2_x#0:4_later#0:5_z#0", 0);
				_subscribe($wi__input_value && $input_value__closures, _scope($scope2_id, {
					z,
					hoist3,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "9:4", {
					z: "10:12",
					hoist3: "11:12"
				}), "__tests__/template.marko_2_input_value#0:3/subscribe", 0);
				_write_guard($scope0_reason, 0) && _resume_branch($scope2_id);
				_assert_hoist(hoist3);
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 0);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}
	_scope($scope0_id, {
		input_value: input.value,
		x,
		later,
		hoist1,
		"ClosureScopes:input_value/7": $wi__input_value && $input_value__closures
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		x: "1:8",
		later: "2:8",
		hoist1: "3:8"
	});
	_assert_hoist(hoist1);
}, 1);
