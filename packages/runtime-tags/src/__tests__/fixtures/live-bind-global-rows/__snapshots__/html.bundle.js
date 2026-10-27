// tags/stepper.marko
var stepper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const clamp = _resume((v) => Math.min(input.max, Number(v)), "b0", $scope0_id);
	let current = input.value;
	_html(`<input${_attr_input_value($scope0_id, "a", current, _resume((_new_current) => {
		current = clamp(_new_current);
	}, "b1", $scope0_id))} type=number>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		d: input.max,
		e: _write_if($scope0_reason, 2) && input.value,
		f: _write_if($scope0_reason, 1) && input.valueChange,
		h: clamp,
		i: _write_if($scope0_reason, 0) && current,
		j: input.valueChange || void 0
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const $global$1 = $global();
	forOf($global$1.rows, (row) => {
		const $scope1_id = _scope_id();
		let qty = row.qty;
		_set_scope_reason(8);
		const $childScope = _peek_scope_id();
		stepper_default({
			value: qty,
			valueChange: _resume((_new_qty) => {
				qty = _new_qty;
			}, "a0", $scope1_id),
			max: row.qty
		});
		_scope($scope1_id, { a: _existing_scope($childScope) });
	});
}, 1);
