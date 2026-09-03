// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("a0", (a, b, c) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__b = _serialize_guard($scope1_reason, 1), $sg__c = _serialize_guard($scope1_reason, 2);
		_html(`<div>${_text_resume($scope1_id, "a", b, $sg__b)}|${_text_resume($scope1_id, "b", c, $sg__c * 2)}</div>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	MyTag.content(1, "Hello", x);
	_html(`<button>${_text_resume($scope0_id, "c", x)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: x,
		a: _existing_scope($childScope)
	});
}, 1);
