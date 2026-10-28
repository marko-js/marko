// tags/field/index.marko
const $template$1 = "<input><em> </em>";
const $walks$1 = " bD l";
const $setup$1 = [[], ["__tests__/tags/field/index.marko_0"]];
_shells({ "__tests__/tags/field/index.marko": "__tests__/tags/field/index.marko !__tests__/tags/field/index.marko_0; bD ;<input><em> </em>" });
var field_default = _template("__tests__/tags/field/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.value, input.valueChange, "PatchControl:2#input/0", $scope0_reason, 0, "PatchWrite:ControlledHandler:#input/0", $scope0_reason, 0)}>${_el_resume($scope0_id, "#input/0")}<em>${_text_resume($scope0_id, "#text/1", input.value, 1, $scope0_reason, 1)}</em>`);
	_script($scope0_id, "__tests__/tags/field/index.marko_0");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/field/index.marko_0_input_value#4_input_valueChange#5/init");
	_scope($scope0_id, {
		input_value: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.value,
		input_valueChange: _unfilled_if($scope0_reason, 0) && input.valueChange
	}, "__tests__/tags/field/index.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		"ControlledHandler:#input/0": ["valueChange"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/field/index.marko_fill0", input.value, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/field/index.marko_fill1", input.valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = "<main><!><p> </p><button>+</button></main>";
const $walks = "D%bD l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%bD l ;<main><!><p> </p><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let text = "hi";
	let open = true;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(10);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			field_default({
				value: text,
				valueChange: _resume((_new_text) => {
					text = _new_text;
				}, "__tests__/template.marko_1/valueChange", $scope1_id)
			});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<p>${_text_resume($scope0_id, "#text/1", text)}</p><button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		text,
		open
	}, "__tests__/template.marko", 0, {
		text: "1:6",
		open: "2:6"
	});
}, 1);
