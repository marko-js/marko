// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth__OR__input_get = _write_guard($scope0_reason, 0), $wg__input_depth = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth__OR__input_get << 1 | $wg__input_depth << 3);
			const $childScope = _peek_scope_id();
			$content({
				depth: input.depth - 1,
				get: input.get
			});
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_depth__OR__input_get, $wg__input_depth);
	_html(`<span>${_text_resume($scope0_id, "b", input.depth, $wg__input_depth)}</span>`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { f: input.get });
};
var tree_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const getTitle = _resume(() => input.title, "a0", $scope0_id);
	_set_scope_reason($wg__input_title << 1);
	const $childScope = _peek_scope_id();
	tree_default({
		depth: 2,
		get: getTitle
	});
	_script($scope0_id, "a1", $wg__input_title);
	_scope($scope0_id, {
		d: input.title,
		e: getTitle,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);
