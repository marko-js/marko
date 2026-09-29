// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Card = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_body = _serialize_guard($scope1_reason, 1), $sg__title = _serialize_guard($scope1_reason, 2);
		const all = input;
		const { title, ...rest } = input;
		_html(`<h1>${_text_resume($scope1_id, "#text/0", title, $sg__title)}</h1><p>${_text_resume($scope1_id, "#text/1", input.body, $sg__input_body)}</p>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	let t = "a";
	_set_serialize_reason(34);
	const $childScope = _peek_scope_id();
	Card.content({
		title: t,
		body: "static"
	});
	_html(`<button></button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		t,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { t: "7:6" });
}, 1);
