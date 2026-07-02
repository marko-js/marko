// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("a0", ({ value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__value = _serialize_guard($scope2_reason, 0);
		_html(`<div>Hello ${_sep($sg__value)}${_escape(value)}${_el_resume($scope2_id, "a", $sg__value)}</div>`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {});
	}) };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			MyTag.content({ value: x });
			writeScope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { e: x });
	_resume_branch($scope0_id);
}, 1);
