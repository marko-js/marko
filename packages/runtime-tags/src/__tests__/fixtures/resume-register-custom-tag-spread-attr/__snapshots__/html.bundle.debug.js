// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	});
});

// tags/heading.marko
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.type, {}, _content_resume("__tests__/tags/heading.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("spread body");
	}, $scope0_id), 0, $sg__input_type);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/heading.marko", 0);
});

// tags/wrapper.marko
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_serialize_reason($sg__input_type << 1);
	const $childScope = _peek_scope_id();
	heading_default(input);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/wrapper.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	wrapper_default({ type: "h1" });
	wrapper_default({ type: card_default });
}, 1);
