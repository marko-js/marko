// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_obj = _serialize_guard($scope0_reason, 0), $sg__input_obj_label = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Row = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_cell_label = _serialize_guard($scope1_reason, 0);
		_html(`<div>${_text_resume($scope1_id, "a", input.cell.label, $sg__input_cell_label)}</div>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_serialize_reason($sg__input_obj_label);
	const $childScope = _peek_scope_id();
	Row.content({ cell: attrTag({ ...input.obj }) });
	_html(`<div>added=${_text_resume($scope0_id, "b", Object.getOwnPropertySymbols(input.obj).length, $sg__input_obj * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { a: _serialize_if($scope0_reason, 1) && _existing_scope($childScope) });
}, 1);
