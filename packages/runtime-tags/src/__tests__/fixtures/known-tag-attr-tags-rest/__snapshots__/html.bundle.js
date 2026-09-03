// tags/inner/index.marko
var inner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_stuff_row = _serialize_guard($scope0_reason, 1), $sg__input_stuff_other_y = _serialize_guard($scope0_reason, 2), $sg__input_stuff_cond_a = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_for_of(input.stuff.row, (row) => {
		const $scope1_id = _scope_id();
		_html(`<div>row ${_text_resume($scope1_id, "a", row.x, $sg__input_stuff_row * 2)}</div>`);
		_serialize_if($scope0_reason, 1) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_stuff_row, $sg__input_stuff_row, $sg__input_stuff_row, 0, 1);
	_html(`<div>other ${_text_resume($scope0_id, "b", input.stuff.other.y, $sg__input_stuff_other_y * 2)}</div><div>cond ${_text_resume($scope0_id, "c", input.stuff.cond.a, $sg__input_stuff_cond_a * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__rest = _serialize_guard($scope0_reason, 2), $sg__input_title = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const { title, ...rest } = input;
	_html(`<h1>${_text_resume($scope0_id, "a", title, $sg__input_title)}</h1>`);
	_set_serialize_reason({
		0: $sg__rest,
		1: $sg__rest,
		2: $sg__rest,
		3: $sg__rest
	});
	const $childScope = _peek_scope_id();
	inner_default({ stuff: rest });
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { b: _serialize_if($scope0_reason, 2) && _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let cond = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(10);
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
