// tags/card.marko
var card_default = _template("d", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=t>t</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "d0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/heading.marko
var heading_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_type = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.type, {}, _content_resume("e0", () => {
		_scope_id();
		_scope_reason();
		_html("shared body: registered once");
	}, $scope0_id), 0, $sg__input_type);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/a.marko
var a_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	heading_default({ type: card_default });
});

// tags/b.marko
var b_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	heading_default({ type: card_default });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	a_default({});
	b_default({});
}, 1);
