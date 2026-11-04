// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("a0", (a, ...rest) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div>${_text_resume($scope1_id, "a", a)}|${_text_resume($scope1_id, "b", JSON.stringify(rest), 2)}</div>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(42);
	const $childScope = _peek_scope_id();
	MyTag.content(x, "two", "three");
	_html(`<button>${_text_resume($scope0_id, "c", x)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: x,
		a: _existing_scope($childScope)
	});
}, 1);
