// tags/stepper.marko
var stepper_default = _template("__tests__/tags/stepper.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const clamp = _resume((v) => Math.min(input.max, Number(v)), "__tests__/tags/stepper.marko_0/clamp", $scope0_id);
	let current = input.value;
	_html(`<input${_attr_input_value($scope0_id, "#input/0", current, _resume((_new_current) => {
		current = clamp(_new_current);
	}, "__tests__/tags/stepper.marko_0/valueChange", $scope0_id))} type=number>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/stepper.marko_0");
	_scope($scope0_id, {
		input_max: input.max,
		input_value: _write_if($scope0_reason, 2) && input.value,
		input_valueChange: _write_if($scope0_reason, 1) && input.valueChange,
		clamp,
		current: _write_if($scope0_reason, 0) && current,
		"TagVariableChange:current": input.valueChange || void 0
	}, "__tests__/tags/stepper.marko", 0, {
		input_max: ["input.max"],
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		clamp: "1:8",
		current: "2:6",
		"TagVariableChange:current": ["currentChange", "2:6"],
		"ControlledHandler:#input/0": ["valueChange"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
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
			}, "__tests__/template.marko_1/valueChange", $scope1_id),
			max: row.qty
		});
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
	});
}, 1);
