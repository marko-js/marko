// tags/card.marko
var card_default = _template("b", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/heading.marko
var heading_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.type, {}, _content_resume("c0", () => {
		_scope_id();
		_scope_reason();
		_html("spread body");
	}, $scope0_id), 0, $sg__input_type);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/wrapper.marko
var wrapper_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_serialize_reason($sg__input_type << 1);
	const $childScope = _peek_scope_id();
	heading_default(input);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	wrapper_default({ type: "h1" });
	wrapper_default({ type: card_default });
}, 1);
