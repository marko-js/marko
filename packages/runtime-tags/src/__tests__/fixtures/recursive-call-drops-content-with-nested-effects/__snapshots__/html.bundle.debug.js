// tags/c3.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			$content({ depth: input.depth - 1 });
			$wi__input_depth && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/c3.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_depth, $wg__input_depth);
	$wi__input_depth && _scope($scope0_id, {}, "__tests__/tags/c3.marko", 0);
};
var c3_default = _template("__tests__/tags/c3.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	c3_default({ depth: 1 });
}, 1);
