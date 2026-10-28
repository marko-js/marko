// tags/number-stepper.marko
const $template = "<button class=dec>-</button><span class=v> </span><button class=inc>+</button>";
const $walks = " bD l b";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; bD l ;<button class=dec>-</button><span class=v> </span><button class=inc>+</button>" });
var number_stepper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=dec>-</button>${_el_resume($scope0_id, "a")}<span class=v>${_text_resume($scope0_id, "b", input.value, void 0, $scope0_reason, 1)}</span><button class=inc>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		f: input.valueChange,
		g: input.value,
		h: input.max
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wf", input.valueChange, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "wg", input.value, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "wh", input.max, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `E lD/${_w0}&Db%n`)($walks)};${/*@__PURE__*/ ((_w0) => `<article><strong> </strong><form>${_w0}<button class=sell>Sell <!></button></form></article>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const p = $global().data.player;
	_for_of(p.entries, (row) => {
		const $scope1_id = _scope_id();
		const item = row.item;
		_patch_fill($scope1_id, "va1", item?.value);
		let qty = row.qty;
		_html(`<article><strong>${_text_resume($scope1_id, "a", item.name, void 0, 4, 0)}</strong><form>`);
		_set_scope_reason(72);
		const $childScope = _patch_child($scope1_id, "b", 0);
		number_stepper_default({
			value: qty,
			valueChange: _resume((_new_qty) => {
				qty = _new_qty;
			}, "a0", $scope1_id),
			max: row.qty
		});
		_patch_child_end();
		_html(`<button class=sell>Sell ${_text_resume($scope1_id, "c", qty * item.value, 2)}</button></form></article>`);
		_patch_fill($scope1_id, "va2", qty, 1);
		_scope($scope1_id, {
			j: item?.value,
			k: qty,
			b: _existing_scope($childScope)
		});
	}, (row) => row.item.id, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3");
	_fill_global_subscribe("a4", $scope0_id);
	_scope($scope0_id, {});
}, 1);
