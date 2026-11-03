// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b__OR__input_items = _write_guard($scope0_reason, 0), $wi__input_b = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const d = input.b + item;
		_html(`<p>${_text_resume($scope1_id, "a", d, $wg__input_b__OR__input_items)}</p>`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			c: $wi__input_b && item,
			_: $wi__input_b && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", $wg__input_b__OR__input_items, _write_guard($scope0_reason, 2), 0, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.b });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(34 | _write_guard($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	child_default({
		b: input.b,
		items: list
	});
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: list,
		a: _existing_scope($childScope)
	});
}, 1);
