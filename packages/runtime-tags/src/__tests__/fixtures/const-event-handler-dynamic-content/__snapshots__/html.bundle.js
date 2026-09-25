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
	const $sg__input_type = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_dynamic_tag($scope0_id, "a", input.type, {}, _content_resume("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button id=inc>${_text_resume($scope1_id, "b", n)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "c1");
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c2");
	}, $scope0_id), 0, $sg__input_type);
	_scope($scope0_id, {
		e: n,
		g: $n__closures
	});
	$sg__input_type || _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	heading_default({ type: card_default });
}, 1);
