// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("a0", (a, b, c) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__b = _serialize_guard($scope1_reason, 2), $sg__c = _serialize_guard($scope1_reason, 3);
		_html(`<div>${_escape(a)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 1))}|${_sep($sg__b)}${_escape(b)}${_el_resume($scope1_id, "b", $sg__b)}|${_sep($sg__c)}${_escape(c)}${_el_resume($scope1_id, "c", $sg__c)}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {});
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: 1,
		3: 1
	});
	MyTag.content(1, "Hello", x);
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: x,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
