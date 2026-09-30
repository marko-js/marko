// tags/inner/index.marko
var inner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_stuff_row = _write_guard($scope0_reason, 1), $wg__input_stuff_other_y = _write_guard($scope0_reason, 2), $wg__input_stuff_cond_a = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_for_of(input.stuff.row, (row) => {
		const $scope1_id = _scope_id();
		_html(`<div>row ${_text_resume($scope1_id, "a", row.x, $wg__input_stuff_row * 2)}</div>`);
		_write_if($scope0_reason, 1) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_stuff_row, $wg__input_stuff_row, 0, 0, 1);
	_html(`<div>other ${_text_resume($scope0_id, "b", input.stuff.other.y, $wg__input_stuff_other_y * 2)}</div><div>cond ${_text_resume($scope0_id, "c", input.stuff.cond.a, $wg__input_stuff_cond_a * 2)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__rest = _write_guard($scope0_reason, 2), $wg__input_title = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const { title, ...rest } = input;
	_html(`<h1>${_text_resume($scope0_id, "a", title, $wg__input_title)}</h1>`);
	_set_scope_reason($wg__rest << 1 | $wg__rest << 3 | $wg__rest << 5 | $wg__rest << 7);
	const $childScope = _peek_scope_id();
	inner_default({ stuff: rest });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { b: _write_if($scope0_reason, 2) && _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let cond = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(34);
	let $cond;
	$cond = attrTag({ a: 1 });
	const $childScope = _peek_scope_id();
	child_default({
		title: "t",
		cond: $cond,
		row: attrTags(attrTag({ x: 1 }), { x: 2 }),
		other: attrTag({ y: 1 })
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: cond,
		b: _existing_scope($childScope)
	});
}, 1);
