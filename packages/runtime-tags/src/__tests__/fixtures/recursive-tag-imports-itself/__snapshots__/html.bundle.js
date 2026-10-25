// under.marko
var under_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<p>under ${_text_resume($scope0_id, "a", input.depth, $wg__input_depth * 2)}</p>`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			under_default({ depth: input.depth - 1 });
			$wi__input_depth && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", $wg__input_depth, $wg__input_depth);
	$wi__input_depth && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_depth << 1);
	const $childScope = _peek_scope_id();
	under_default({ depth: input.depth });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
