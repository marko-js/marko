// tags/field/index.marko
const $template$1 = "<input>";
const $walks$1 = " b";
const $setup$1 = [[], ["__tests__/tags/field/index.marko_0"]];
_shells({ "__tests__/tags/field/index.marko": "__tests__/tags/field/index.marko !__tests__/tags/field/index.marko_0; ;<input>" });
var field_default = _template("__tests__/tags/field/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_value = _filled_guard($scope0_reason, 1), $fg__input_valueChange = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.value, input.valueChange, 3, $scope0_reason, 0)}>${_el_mark($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/field/index.marko_0");
	_patch_render($scope0_id, "__tests__/tags/field/index.marko_0_input_value#3_input_valueChange#4/setup", [$fg__input_value && "input_value", $fg__input_valueChange && "input_valueChange"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_value: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.value,
		input_valueChange: _unfilled_if($scope0_reason, 0) && input.valueChange
	}, "__tests__/tags/field/index.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		"ControlledHandler:#input/0": ["valueChange", "1:26"]
	}) || ($fg__input_value && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 1)), $fg__input_valueChange && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_valueChange", input.valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = "<main><!><button>+</button><output></output></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button><output></output></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_prefix = _server_guard($scope0_reason, 0), $fg__input_prefix = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_prefix && _patch_write($scope0_id, "PatchMarkedWrite:input_prefix", input.prefix, !$sg__input_prefix);
	const handle = _bind_resume((next) => {
		document.querySelector("output").textContent = input.prefix + next;
	}, "__tests__/template.marko_0/handle", $scope0_id);
	let open = false;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 0) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			field_default({
				value: "a",
				valueChange: handle
			});
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_handle#0:5/setup");
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}<output></output></main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_prefix && _patch_render($scope0_id, "__tests__/template.marko_1_handle#0:5/setup", ["handle", "input_prefix"]);
	_scope($scope0_id, {
		input_prefix: input.prefix,
		handle,
		open
	}, "__tests__/template.marko", 0, {
		input_prefix: ["input.prefix"],
		handle: "1:8",
		open: "4:6"
	}) || $fg__input_prefix && _patch_write($scope0_id, "PatchMarkedWrite:handle", handle, !$sg__input_prefix);
}, 1);
