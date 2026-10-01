// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("a0", ({ value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__value = _write_guard($scope2_reason, 0);
		_html(`<div>Hello ${_text_resume($scope2_id, "a", value, $wg__value * 2)}</div>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			MyTag.content({ value: x });
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>${_text_resume($scope0_id, "c", x)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { e: x });
}, 1);
