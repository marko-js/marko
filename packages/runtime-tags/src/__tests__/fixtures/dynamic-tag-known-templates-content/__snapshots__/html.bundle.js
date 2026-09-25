// tags/card.marko
var card_default = _template("b", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/label.marko
var label_default = _template("c", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		e: input.text,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let useCard = false;
	_html(`<button id=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", label_default, { text: "first" }, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("first body");
	}, $scope0_id));
	_dynamic_tag($scope0_id, "c", card_default, { text: "second" }, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("second body");
	}, $scope0_id));
	_script($scope0_id, "a2");
	_scope($scope0_id, { d: useCard });
}, 1);
