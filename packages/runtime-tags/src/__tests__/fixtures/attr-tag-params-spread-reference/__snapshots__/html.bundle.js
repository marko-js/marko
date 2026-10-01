// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(_text_resume($scope0_id, "a", JSON.stringify(input), $wg__input * 2));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input << 1);
	let $item;
	forUntil(1, 0, 1, (i) => {
		$item = attrTags($item, { value: i });
	});
	const $childScope = _peek_scope_id();
	child_default({
		...input,
		item: $item
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
