// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=card>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let show = false;
	let count = 0;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", null, {}, _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button id=inc>${_text_resume($scope1_id, "b", count)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id));
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: show,
		d: count,
		e: $count__closures
	});
}, 1);
