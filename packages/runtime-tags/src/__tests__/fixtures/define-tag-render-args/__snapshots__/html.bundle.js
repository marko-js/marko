// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("a0", (a, b, c) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__a = _write_guard($scope1_reason, 1), $wg__b = _write_guard($scope1_reason, 2), $wg__c = _write_guard($scope1_reason, 3);
		_html(`<div>${_text_resume($scope1_id, "a", a, $wg__a)}|${_text_resume($scope1_id, "b", b, $wg__b * 2)}|${_text_resume($scope1_id, "c", c, $wg__c * 2)}</div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(130);
	const $childScope = _peek_scope_id();
	MyTag.content(1, "Hello", x);
	_html(`<button>${_text_resume($scope0_id, "c", x)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: x,
		a: _existing_scope($childScope)
	});
}, 1);
