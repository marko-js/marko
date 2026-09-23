// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 1), $sg__rest = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { item, ...rest } = input;
	_for_of(item, (it) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", it.content, {}, 0, 0, $sg__input_item);
		_serialize_if($scope0_reason, 1) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item);
	_html(`<p>${_text_resume($scope0_id, "b", Object.keys(rest).join(), $sg__rest)}</p>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mode = 0;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(42);
	let $item;
	let $other;
	$item = attrTag({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		_html("A");
	}, $scope0_id) });
	const $childScope = _peek_scope_id();
	child_default({
		item: $item,
		other: $other
	});
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: mode,
		b: _existing_scope($childScope)
	});
}, 1);
