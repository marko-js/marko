// tags/card.marko
var card_default = _template("c", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/box.marko
var box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_as = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.as || "div", { class: "box" }, _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("box body");
	}, $scope0_id), 0, $sg__input_as);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	box_default({});
	box_default({ as: "section" });
	box_default({ as: card_default });
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: count });
}, 1);
