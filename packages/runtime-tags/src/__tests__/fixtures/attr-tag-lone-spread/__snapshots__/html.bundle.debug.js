// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_obj = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Row = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<div>${_escape(input.cell.label)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope1_reason, 0))}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_serialize_reason(_serialize_guard($scope0_reason, 1));
	const $childScope = _peek_scope_id();
	Row.content({ cell: attrTag({ ...input.obj }) });
	_html(`<div>added=${_sep($sg__input_obj)}${_escape(Object.getOwnPropertySymbols(input.obj).length)}${_el_resume($scope0_id, "#text/1", $sg__input_obj)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/0": _serialize_if($scope0_reason, 1) && _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
