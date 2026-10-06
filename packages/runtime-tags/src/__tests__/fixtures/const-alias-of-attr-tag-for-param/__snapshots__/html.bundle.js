// tags/list/index.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_row = _write_guard($scope0_reason, 0), $wi__input_row = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", row, {}, 0, 0, $wg__input_row);
		$wi__input_row && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_row, $wg__input_row);
	$wi__input_row && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_items << 1);
	let $row;
	forOf(input.items, (item) => {
		$row = attrTags($row, { content: _content("a0", () => {
			const $scope1_reason = _scope_reason(), $wg__x = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "a", item, $wg__input_items || $wg__x)}</span>`);
			($wi__input_items || _write_if($scope1_reason, 0)) && _scope($scope1_id, {});
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ row: $row });
	$wi__input_items && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
