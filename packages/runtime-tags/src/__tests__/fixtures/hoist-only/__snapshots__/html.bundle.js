// template.marko
var template_default = _template("a", (input) => {
	const $si__input_value = _serialize_if(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const $hoist1_getter = _hoist($scope0_id, "a2");
	const $input_value__closures = /* @__PURE__ */ new Set();
	const x = $hoist1_getter;
	const hoist1 = _resume(() => input.value, "a0", $scope0_id);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_if(() => {
				{
					const $scope2_id = _scope_id();
					const z = _hoist($scope2_id, "a3");
					const hoist3 = _resume(() => input.value, "a1", $scope2_id);
					_script($scope2_id, "a4", 0);
					_subscribe($si__input_value && $input_value__closures, _scope($scope2_id, {
						a: z,
						c: hoist3,
						_: _scope_with_id($scope1_id)
					}), "a5", 0);
					return 0;
				}
			}, $scope1_id, "a", 1, 0, 0);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 0, 0);
	_scope($scope0_id, {
		d: input.value,
		e: x,
		f: hoist1,
		g: $si__input_value && $input_value__closures
	});
}, 1);
