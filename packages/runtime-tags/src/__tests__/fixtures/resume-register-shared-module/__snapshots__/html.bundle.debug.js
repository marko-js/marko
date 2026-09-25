// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=t>t</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "1:65");
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
		_html("shared body: registered once");
	}, $scope0_id), 0, $sg__input_type);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/heading.marko", 0);
});

// tags/a.marko
var a_default = _template("__tests__/tags/a.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	heading_default({ type: card_default });
});

// tags/b.marko
var b_default = _template("__tests__/tags/b.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	heading_default({ type: card_default });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	a_default({});
	b_default({});
}, 1);
