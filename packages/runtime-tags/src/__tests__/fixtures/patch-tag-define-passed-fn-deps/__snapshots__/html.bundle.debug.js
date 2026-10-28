// tags/field.marko
const $TextField_content__walks = " b";
const $TextField_content__template = "<input>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($TextField_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&/&b`)($TextField_content__walks);
const $setup$1 = [[], ["#childScope/0>__tests__/tags/field.marko_1_attrs#6", "#childScope/0>__tests__/tags/field.marko_1"]];
_shells({
	"__tests__/tags/field.marko_2*content": "__tests__/tags/field.marko_2*content,",
	"__tests__/tags/field.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/field.marko_1*content !__tests__/tags/field.marko_1_attrs#6 __tests__/tags/field.marko_1;${_w0};${_w1}`)($TextField_content__walks, $TextField_content__template),
	"__tests__/tags/field.marko": /*@__PURE__*/ (() => `__tests__/tags/field.marko !#childScope/0>__tests__/tags/field.marko_1_attrs#6 #childScope/0>__tests__/tags/field.marko_1;${((_w0) => `b/${_w0}&/&b`)($TextField_content__walks)};${((_w0) => `<!>${_w0}<!>`)($TextField_content__template)}`)()
});
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_hint", input.hint, !_server_guard($scope0_reason, 1));
	const TextField = { content: _content("__tests__/tags/field.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $cg__valueChange = _client_guard($scope1_reason, 2);
		const { value, valueChange, ...attrs } = input;
		_html(`<input${_attr_input_value($scope1_id, "#input/0", value, valueChange, 1, $scope1_reason, 0, 1, $scope1_reason, 0)}${_attrs_partial(attrs, {
			value: 1,
			valueChange: 1
		}, "#input/0", $scope1_id, "input", void 0, $scope1_reason, 3)}>${_el_resume($scope1_id, "#input/0")}`);
		_script($scope1_id, "__tests__/tags/field.marko_1_attrs#6");
		_script($scope1_id, "__tests__/tags/field.marko_1");
		$cg__valueChange && _patch_write($scope1_id, "PatchMarkedWrite:value", value, !(_filled_guard($scope1_reason, 1) && $cg__valueChange));
		_client_guard($scope1_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:valueChange", valueChange, !(_filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1)));
		_patch_join_init($scope1_id, "__tests__/tags/field.marko_1_value#3_valueChange#4/init", $scope1_reason, 0, _filled_guard($scope1_reason, 1) && "value", _filled_guard($scope1_reason, 2) && "valueChange");
		_scope($scope1_id, {
			value: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0)) && value,
			valueChange: _unfilled_if($scope1_reason, 0) && valueChange
		}, "__tests__/tags/field.marko", "1:2", {
			value: "2:12",
			valueChange: "2:19",
			"ControlledHandler:#input/0": ["valueChange", "3:31"]
		});
	}, $scope0_id, 1) };
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	TextField.content({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "__tests__/tags/field.marko_0/valueChange")
	});
	_patch_child_end();
	const Log = { content: _content("__tests__/tags/field.marko_2*content", ({ log, value }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_script($scope2_id, "__tests__/tags/field.marko_2_log#2_value#3", 0, (_filled_guard($scope2_reason, 1) || _filled_guard($scope2_reason, 2)) && (_client_guard($scope2_reason, 1) || _client_guard($scope2_reason, 2) ? 2 : 1), _filled_guard($scope2_reason, 1) && "log", _filled_guard($scope2_reason, 2) && "value");
		_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "__tests__/tags/field.marko_2_log#2_value#3/init");
		_scope($scope2_id, {
			log,
			value
		}, "__tests__/tags/field.marko", "6:2", {
			log: "6:15",
			value: "6:20"
		}) || (_filled_guard($scope2_reason, 1) && _patch_write($scope2_id, "PatchMarkedWrite:log", log, !_server_guard($scope2_reason, 1)), _filled_guard($scope2_reason, 2) && _patch_write($scope2_id, "PatchMarkedWrite:value", value, !_server_guard($scope2_reason, 2)));
	}, $scope0_id, 1) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	Log.content({
		log: _bind_resume(function(value) {
			console.log(value, input.hint);
		}, "__tests__/tags/field.marko_0/log", $scope0_id),
		value: input.v
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_hint: input.hint,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/tags/field.marko", 0, { input_hint: ["input.hint"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>v</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks$1)};${((_w0) => `<button>v</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let v = "x";
	_html(`<button>v</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	field_default({
		hint: input.hint,
		v
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		v,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { v: "1:6" });
}, 1);
