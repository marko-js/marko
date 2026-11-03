// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_a = _write_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.a + item, $wg__input_items__OR__input_a)}</p><div></div>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "b0");
		_scope($scope1_id, {
			d: item,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $wg__input_items__OR__input_a, $wg__input_items);
	_scope($scope0_id, { e: input.a });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | $wg__input_items << 3);
	const $childScope = _peek_scope_id();
	child_default({
		a: input.x,
		items: input.items
	});
	_set_scope_reason(2 | $wg__input_items << 3);
	const $childScope2 = _peek_scope_id();
	child_default({
		a: "m0",
		items: input.items
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: n,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
