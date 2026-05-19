// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const { a, b } = input;
		_html(`<div>${_escape(a)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 0))}</div><div>${_escape(b)}${_el_resume($scope1_id, "b", _serialize_guard($scope1_reason, 1))}</div>`);
		_script($scope1_id, "a1");
		_script($scope1_id, "a2");
		writeScope($scope1_id, { e: input.a });
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 1),
		1: _serialize_guard($scope0_reason, 2)
	});
	Child.content({
		a: input.a,
		b: input.b
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
