// tags/number-stepper.marko
var number_stepper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=dec>-</button>${_el_resume($scope0_id, "a")}<span class=v>${_text_resume($scope0_id, "b", input.value, _write_guard($scope0_reason, 0))}</span><button class=inc>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		f: input.valueChange,
		g: input.value,
		h: input.max
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const p = $global().data.player;
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
			}, "a0", $scope1_id),
			max: row.qty
		});
		_html(`<button class=sell>Sell ${_text_resume($scope1_id, "c", qty * item.value, 2)}</button></form></article>`);
		_scope($scope1_id, {
			j: item?.value,
			b: _existing_scope($childScope)
		});
	});
}, 1);
