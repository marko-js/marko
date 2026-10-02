// tags/list/index.marko
var list_default = _template("__tests__/tags/list/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_row = _write_guard($scope0_reason, 0), $wi__input_row = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", row, {}, 0, 0, $wg__input_row);
		$wi__input_row && _scope($scope1_id, {}, "__tests__/tags/list/index.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_row, $wg__input_row);
	$wi__input_row && _scope($scope0_id, {}, "__tests__/tags/list/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_items << 1);
	let $row;
	forOf(input.items, (item) => {
		$row = attrTags($row, { content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", item, $wg__input_items)}</span>`);
			$wi__input_items && _scope($scope1_id, {}, "__tests__/template.marko", "3:6");
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ row: $row });
	$wi__input_items && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
