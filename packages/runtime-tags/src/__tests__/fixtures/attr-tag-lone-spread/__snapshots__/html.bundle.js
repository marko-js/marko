// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_obj = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Row = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<div>${_escape(input.cell.label)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 0))}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}) };
	_set_serialize_reason(_serialize_guard($scope0_reason, 1));
	const $childScope = _peek_scope_id();
	Row.content({ cell: attrTag({ ...input.obj }) });
	_html(`<div>added=${_sep($sg__input_obj)}${_escape(Object.getOwnPropertySymbols(input.obj).length)}${_el_resume($scope0_id, "b", $sg__input_obj)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { a: _serialize_if($scope0_reason, 1) && _existing_scope($childScope) });
}, 1);
