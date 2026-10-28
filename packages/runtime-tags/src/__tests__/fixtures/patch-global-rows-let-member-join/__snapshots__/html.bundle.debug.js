// tags/number-stepper.marko
const $template$1 = "<button class=dec>-</button><span class=v> </span><button class=inc>+</button>";
const $walks$1 = " bD l b";
const $setup$1 = [[], ["__tests__/tags/number-stepper.marko_0"]];
_shells({ "__tests__/tags/number-stepper.marko": "__tests__/tags/number-stepper.marko !__tests__/tags/number-stepper.marko_0; bD l ;<button class=dec>-</button><span class=v> </span><button class=inc>+</button>" });
var number_stepper_default = _template("__tests__/tags/number-stepper.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=dec>-</button>${_el_resume($scope0_id, "#button/0")}<span class=v>${_text_resume($scope0_id, "#text/1", input.value, void 0, $scope0_reason, 1)}</span><button class=inc>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/number-stepper.marko_0");
	_scope($scope0_id, {
		input_valueChange: input.valueChange,
		input_value: input.value,
		input_max: input.max
	}, "__tests__/tags/number-stepper.marko", 0, {
		input_valueChange: ["input.valueChange"],
		input_value: ["input.value"],
		input_max: ["input.max"]
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_valueChange", input.valueChange, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:input_value", input.value, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchWrite:input_max", input.max, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `E lD/${_w0}&Db%n`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<article><strong> </strong><form>${_w0}<button class=sell>Sell <!></button></form></article>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const p = $global$1.data.player;
	_for_of(p.entries, (row) => {
		const $scope1_id = _scope_id();
		const item = row.item;
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", item?.value);
		let qty = row.qty;
		_html(`<article><strong>${_text_resume($scope1_id, "#text/0", item.name, void 0, 4, 0)}</strong><form>`);
		_set_scope_reason(72);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
		number_stepper_default({
			value: qty,
			valueChange: _resume((_new_qty) => {
				qty = _new_qty;
			}, "__tests__/template.marko_1/valueChange", $scope1_id),
			max: row.qty
		});
		_patch_child_end();
		_html(`<button class=sell>Sell ${_text_resume($scope1_id, "#text/2", qty * item.value, 2)}</button></form></article>`);
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", qty, 1);
		_scope($scope1_id, {
			item_value: item?.value,
			qty,
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2", {
			item_value: ["item.value", "3:10"],
			qty: "7:12"
		});
	}, (row) => row.item.id, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell");
	_fill_global_subscribe("__tests__/template.marko_0_$global_data#5", $scope0_id);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
