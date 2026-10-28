// tags/text-area.marko
const $template$1 = "<textarea></textarea>";
const $walks$1 = " b";
const $setup$1 = [[], ["__tests__/tags/text-area.marko_0"]];
_shells({ "__tests__/tags/text-area.marko": "__tests__/tags/text-area.marko !__tests__/tags/text-area.marko_0; ;<textarea></textarea>" });
var text_area_default = _template("__tests__/tags/text-area.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea>${_attr_textarea_value($scope0_id, "#textarea/0", input.value, input.valueChange, "PatchControl:2#textarea/0", $scope0_reason, 0, "PatchWrite:ControlledHandler:#textarea/0", $scope0_reason, 0)}</textarea>${_el_resume($scope0_id, "#textarea/0")}`);
	_script($scope0_id, "__tests__/tags/text-area.marko_0");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/text-area.marko_0_input_value#3_input_valueChange#4/init");
	_scope($scope0_id, {
		input_value: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.value,
		input_valueChange: _unfilled_if($scope0_reason, 0) && input.valueChange
	}, "__tests__/tags/text-area.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		"ControlledHandler:#textarea/0": ["valueChange"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/text-area.marko_fill0", input.value, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/text-area.marko_fill1", input.valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%bD ;<!><!><p> </p>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_text#0:5/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let text = "";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(10);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			text_area_default({
				value: text,
				valueChange: _resume((_new_text) => {
					text = _new_text;
				}, "__tests__/template.marko_1/valueChange", $scope1_id)
			});
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "#text/1", text)}</p>`);
	_scope($scope0_id, { text: _write_if($scope0_reason, 0) && text }, "__tests__/template.marko", 0, { text: "1:6" });
}, 1);
