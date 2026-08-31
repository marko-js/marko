// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Row = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<div>${_text_resume($scope1_id, "a", input.cell.label, _serialize_guard($scope1_reason, 0))}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}, $scope0_id) };
	_set_serialize_reason(_serialize_guard($scope0_reason, 1));
	const $childScope = _peek_scope_id();
	Row.content({ cell: attrTag({ ...input.obj }) });
	_html(`<div>added=${_text_resume($scope0_id, "b", Object.getOwnPropertySymbols(input.obj).length, _serialize_guard($scope0_reason, 0) * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { a: _serialize_if($scope0_reason, 1) && _existing_scope($childScope) });
}, 1);
