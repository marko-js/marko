// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a2");
	const $input_value__closures = /* @__PURE__ */ new Set();
	const hoist1 = _resume(() => input.value, "a0", $scope0_id);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_hoist($scope2_id, "a3");
					const hoist3 = _resume(() => input.value, "a1", $scope2_id);
					_subscribe($input_value__closures, writeScope($scope2_id, {
						a: hoist3,
						_: _scope_with_id($scope1_id)
					}));
					return 0;
				}
			}, $scope1_id, "a", 1, 0, 0);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 0, 0);
	writeScope($scope0_id, {
		d: input.value,
		e: hoist1,
		Bd: _serialize_if($scope0_reason, 0) && $input_value__closures
	});
}, 1);
