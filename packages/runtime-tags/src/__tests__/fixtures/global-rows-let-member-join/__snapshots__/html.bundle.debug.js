// tags/number-stepper.marko
var number_stepper_default = _template("__tests__/tags/number-stepper.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=dec>-</button>${_el_resume($scope0_id, "#button/0")}<span class=v>${_text_resume($scope0_id, "#text/1", input.value, _write_guard($scope0_reason, 0))}</span><button class=inc>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/number-stepper.marko_0");
	_scope($scope0_id, {
		input_valueChange: input.valueChange,
		input_value: input.value,
		input_max: input.max
	}, "__tests__/tags/number-stepper.marko", 0, {
		input_valueChange: ["input.valueChange"],
		input_value: ["input.value"],
		input_max: ["input.max"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const p = $global$1.data.player;
	forOf(p.entries, (row) => {
		const $scope1_id = _scope_id();
		const item = row.item;
		let qty = row.qty;
		_html(`<article><strong>${_escape(item.name)}</strong><form>`);
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		number_stepper_default({
			value: qty,
			valueChange: _resume((_new_qty) => {
				qty = _new_qty;
			}, "__tests__/template.marko_1/valueChange", $scope1_id),
			max: row.qty
		});
		_html(`<button class=sell>Sell ${_text_resume($scope1_id, "#text/2", qty * item.value, 2)}</button></form></article>`);
		_scope($scope1_id, {
			item_value: item?.value,
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2", { item_value: ["item.value", "3:10"] });
	});
}, 1);
