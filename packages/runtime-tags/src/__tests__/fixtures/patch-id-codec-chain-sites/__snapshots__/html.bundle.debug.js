// tags/field.marko
const $template$1 = "<label>field</label><input>";
const $walks$1 = " b b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; b ;<label>field</label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "PatchAttr:#label/0 for", 0, 0)}>field</label>${_el_resume($scope0_id, "#label/0", 0)}<input${_attr("id", uid, $scope0_id, "PatchAttr:#input/1 id", 0, 0)}>${_el_resume($scope0_id, "#input/1", 0)}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!><!>${_w0}${_w1}<!><!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b%b/${_w0}&/${_w1}&%c`)($walks$1, $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1], ["#childScope/2>", $setup$1]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b%b/${_w0}&/${_w1}&%c`)($walks$1, $walks$1)};${((_w0, _w1) => `<!><!>${_w0}${_w1}<!><!>`)($template$1, $template$1)}`)(),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1], ["#childScope/2>", $setup$1], ["#childScope/3>", $setup$1]))};${/*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&`)($walks$1, $walks$1, $walks$1, $walks$1)};${/*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `${_w0}${_w1}${_w2}${_w3}`)($template$1, $template$1, $template$1, $template$1)}`)(),
	"__tests__/template.marko_3*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_3*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_4*shell": /*@__PURE__*/ (() => `__tests__/template.marko_4*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks$1)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1)}`)(),
	"__tests__/template.marko_5*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_5*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.mode === 0) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			field_default({});
			_patch_child_end();
			_if(() => {
				if (input.nested) {
					const $scope4_id = _scope_id();
					const $childScope2 = _peek_scope_id($scope4_id, "#childScope/0", 1);
					field_default({});
					_patch_child_end();
					const $childScope3 = _peek_scope_id($scope4_id, "#childScope/1", 2);
					field_default({});
					_patch_child_end();
					_scope($scope4_id, {
						"#childScope/0": _existing_scope($childScope2),
						"#childScope/1": _existing_scope($childScope3)
					}, "__tests__/template.marko", "1:29");
					return 0;
				}
			}, $scope1_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_4*shell"], $scope0_reason, 1);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_nested#0:7/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		} else if (input.mode === 1) {
			const $scope2_id = _scope_id();
			const $childScope4 = _peek_scope_id($scope2_id, "#childScope/0", 0);
			field_default({});
			_patch_child_end();
			const $childScope5 = _peek_scope_id($scope2_id, "#childScope/1", 1);
			field_default({});
			_patch_child_end();
			const $childScope6 = _peek_scope_id($scope2_id, "#childScope/2", 2);
			field_default({});
			_patch_child_end();
			const $childScope7 = _peek_scope_id($scope2_id, "#childScope/3", 3);
			field_default({});
			_patch_child_end();
			_scope($scope2_id, {
				"#childScope/0": _existing_scope($childScope4),
				"#childScope/1": _existing_scope($childScope5),
				"#childScope/2": _existing_scope($childScope6),
				"#childScope/3": _existing_scope($childScope7)
			}, "__tests__/template.marko", "2:2");
			return 1;
		} else {
			const $scope3_id = _scope_id();
			const $childScope8 = _peek_scope_id($scope3_id, "#childScope/0", 0);
			field_default({});
			_patch_child_end();
			_scope($scope3_id, { "#childScope/0": _existing_scope($childScope8) }, "__tests__/template.marko", "3:2");
			return 2;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, [
		"__tests__/template.marko_1*shell",
		"__tests__/template.marko_2*shell",
		"__tests__/template.marko_3*shell"
	], $scope0_reason, 0);
	const $childScope9 = _peek_scope_id($scope0_id, "#childScope/1", 4);
	field_default({});
	_patch_child_end();
	const $childScope10 = _peek_scope_id($scope0_id, "#childScope/2", 5);
	field_default({});
	_patch_child_end();
	_if(() => {
		if (input.other) {
			const $scope5_id = _scope_id();
			const $childScope11 = _peek_scope_id($scope5_id, "#childScope/0", 6);
			field_default({});
			_patch_child_end();
			_scope($scope5_id, { "#childScope/0": _existing_scope($childScope11) }, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["__tests__/template.marko_5*shell"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_nested: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.nested,
		"#childScope/1": _existing_scope($childScope9),
		"#childScope/2": _existing_scope($childScope10)
	}, "__tests__/template.marko", 0, { input_nested: ["input.nested"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.nested, !_server_guard($scope0_reason, 1));
}, 1);
