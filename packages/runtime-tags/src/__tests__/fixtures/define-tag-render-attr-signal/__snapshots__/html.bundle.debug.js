// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("__tests__/template.marko_1*content", ({ number }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__number = _serialize_guard($scope1_reason, 0);
		_html(`<div>${_text_resume($scope1_id, "#text/0", number, $sg__number)}</div>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	MyTag.content({ number: x });
	_html(`<button>${_text_resume($scope0_id, "#text/2", x)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
