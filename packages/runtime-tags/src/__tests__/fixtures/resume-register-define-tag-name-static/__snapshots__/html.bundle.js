// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	const Heading = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope1_reason, 0);
		_dynamic_tag($scope1_id, "a", input.type, {}, _content_resume("a0", () => {
			_scope_id();
			_scope_reason();
			_html("define body: not registered");
		}, $scope1_id), 0, $sg__input_type);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	Heading.content({ type: "h1" });
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	Heading.content({ type: count % 2 ? "h2" : "h3" });
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: count,
		d: _existing_scope($childScope)
	});
}, 1);
