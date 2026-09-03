// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_obj = _serialize_guard($scope0_reason, 0), $sg__input_obj_label = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Row = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_cell_label = _serialize_guard($scope1_reason, 0);
		_html(`<div>${_text_resume($scope1_id, "#text/0", input.cell.label, $sg__input_cell_label)}</div>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_serialize_reason($sg__input_obj_label);
	const $childScope = _peek_scope_id();
	Row.content({ cell: attrTag({ ...input.obj }) });
	_html(`<div>added=${_text_resume($scope0_id, "#text/1", Object.getOwnPropertySymbols(input.obj).length, $sg__input_obj * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _serialize_if($scope0_reason, 1) && _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
