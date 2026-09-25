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

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const Heading = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope1_reason, 0);
		_dynamic_tag($scope1_id, "a", input.type, {}, _content_resume("a0", () => {
			_scope_id();
			_scope_reason();
			_html("define body: registered");
		}, $scope1_id), 0, $sg__input_type);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, _scope_id()) };
	Heading.content({ type: "h1" });
	Heading.content({ type: card_default });
}, 1);
