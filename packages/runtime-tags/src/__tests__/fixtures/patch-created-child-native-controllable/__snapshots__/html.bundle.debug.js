// tags/field.marko
const $template$2 = "<input>";
const $walks$2 = " b";
const $setup$2 = [[], ["__tests__/tags/field.marko_0"]];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko !__tests__/tags/field.marko_0; ;<input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_input_value($scope0_id, "#input/0", input.value, input.valueChange, "PatchControl:2#input/0", $scope0_reason, 0, "PatchWrite:ControlledHandler:#input/0", $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/field.marko_0");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/field.marko_0_input_value#3_input_valueChange#4/init");
	_scope($scope0_id, {
		input_value: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.value,
		input_valueChange: _unfilled_if($scope0_reason, 0) && input.valueChange
	}, "__tests__/tags/field.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		"ControlledHandler:#input/0": ["valueChange", "1:26"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/field.marko_fill0", input.value, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/field.marko_fill1", input.valueChange, !_server_guard($scope0_reason, 2)));
});

// tags/page-b.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<output> </output>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/page-b.marko": /*@__PURE__*/ (() => `__tests__/tags/page-b.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&D l`)(" b")};${((_w0) => `${_w0}<output> </output>`)($template$2)}`)() });
var page_b_default = _template("__tests__/tags/page-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let text = "a";
	_set_scope_reason(10);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	field_default({
		value: text,
		valueChange: _resume((_new_text) => {
			text = _new_text;
		}, "__tests__/tags/page-b.marko_0/valueChange", $scope0_id)
	});
	_patch_child_end();
	_html(`<output>${_text_resume($scope0_id, "#text/1", text)}</output>`);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/page-b.marko_fill0", text, 1);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/page-b.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			page_b_default({});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
