// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Heading = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope1_reason, 0);
		_dynamic_tag($scope1_id, "#text/0", input.type, {}, _content("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html("define body: not registered");
		}, $scope1_id), 0, $sg__input_type);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "4:2");
	}, $scope0_id) };
	Heading.content({ type: "h1" });
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	Heading.content({ type: count % 2 ? "h2" : "h3" });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/3": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
