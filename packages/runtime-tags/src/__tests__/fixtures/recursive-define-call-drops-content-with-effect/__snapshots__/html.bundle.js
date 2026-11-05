// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const E = { content: _content("a0", ({ depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__depth = _write_guard($scope1_reason, 0), $wi__depth = _write_if($scope1_reason, 0);
		_if(() => {
			if (depth > 0) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__depth << 1);
				const $childScope = _peek_scope_id();
				E.content({ depth: depth - 1 });
				$wi__depth && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "a", $wg__depth, $wg__depth);
		$wi__depth && _scope($scope1_id, {});
	}, $scope0_id) };
	E.content({ depth: 2 });
}, 1);
