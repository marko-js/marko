// tags/inner/index.marko
var inner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_stuff_row = _serialize_guard($scope0_reason, 1), $sg__input_stuff_other_y = _serialize_guard($scope0_reason, 2), $sg__input_stuff_cond_a = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_for_of(input.stuff.row, (row) => {
		const $scope1_id = _scope_id();
		_html(`<div>row ${_sep($sg__input_stuff_row)}${_escape(row.x)}${_el_resume($scope1_id, "a", $sg__input_stuff_row)}</div>`);
		_serialize_if($scope0_reason, 1) && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_stuff_row, $sg__input_stuff_row, $sg__input_stuff_row, 0, 1, 1);
	_html(`<div>other ${_sep($sg__input_stuff_other_y)}${_escape(input.stuff.other.y)}${_el_resume($scope0_id, "b", $sg__input_stuff_other_y)}</div><div>cond ${_sep($sg__input_stuff_cond_a)}${_escape(input.stuff.cond.a)}${_el_resume($scope0_id, "c", $sg__input_stuff_cond_a)}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/child/index.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__rest = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { title, ...rest } = input;
	_html(`<h1>${_escape(title)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}</h1>`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__rest,
		1: $sg__rest,
		2: $sg__rest,
		3: $sg__rest
	});
	inner_default({ stuff: rest });
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { b: _serialize_if($scope0_reason, 2) && _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let cond = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: 1,
		2: 1
	});
	let $cond2;
	$cond2 = attrTag({ a: 1 });
	child_default({
		title: "t",
		cond: $cond2,
		row: attrTags(attrTag({ x: 1 }), { x: 2 }),
		other: attrTag({ y: 1 })
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: cond,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
