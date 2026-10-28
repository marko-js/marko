// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "#label/0", $scope0_reason, 0)}>${_text_resume($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "#input/2", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "#input/2", $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = "<h1>Fields</h1><!><!><!><!><!><!><!><!><!>";
const $walks = " b%b%b%b%b%b%b%b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; b%b%b%b%b%b%b%b%;<h1>Fields</h1><!><!><!><!><!><!><!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_3*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_3*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_4*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_4*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_5*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_5*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_6*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_6*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_7*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_7*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_8*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_8*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const heading = _id("heading");
	_html(`<h1${_attr("id", heading, $scope0_id, "#h1/0", 0, 0)}>Fields</h1>${_el_resume($scope0_id, "#h1/0", 0)}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 2) << 3);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		field_default({
			name: item.key,
			heading
		});
		_patch_child_end();
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 2);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(0);
		const $childScope2 = _patch_child($scope2_id, "#childScope/0", 1);
		field_default({
			name: item.key,
			heading
		});
		_patch_child_end();
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "3:2");
	}, "key", $scope0_id, "#text/2", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_reason, 2);
	_for_in(input.record, (key, value) => {
		const $scope3_id = _scope_id();
		_set_scope_reason(0);
		const $childScope3 = _patch_child($scope3_id, "#childScope/0", 2);
		field_default({
			name: key,
			heading
		});
		_patch_child_end();
		_scope($scope3_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", "4:2");
	}, 0, $scope0_id, "#text/3", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_3*shell", $scope0_reason, 3);
	_for_in(input.record, (key, value) => {
		const $scope4_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 3) << 3);
		const $childScope4 = _patch_child($scope4_id, "#childScope/0", 3);
		field_default({
			name: value,
			heading
		});
		_patch_child_end();
		_scope($scope4_id, { "#childScope/0": _existing_scope($childScope4) }, "__tests__/template.marko", "5:2");
	}, (key) => "key-" + key, $scope0_id, "#text/4", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_4*shell", $scope0_reason, 3);
	_for_to(input.end, input.start, 1, (i) => {
		const $scope5_id = _scope_id();
		_set_scope_reason(0);
		const $childScope5 = _patch_child($scope5_id, "#childScope/0", 4);
		field_default({
			name: i,
			heading
		});
		_patch_child_end();
		_scope($scope5_id, { "#childScope/0": _existing_scope($childScope5) }, "__tests__/template.marko", "6:2");
	}, 0, $scope0_id, "#text/5", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_5*shell", $scope0_reason, 0);
	_for_to(input.end, input.start, 1, (i) => {
		const $scope6_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
		const $childScope6 = _patch_child($scope6_id, "#childScope/0", 5);
		field_default({
			name: i,
			heading
		});
		_patch_child_end();
		_scope($scope6_id, { "#childScope/0": _existing_scope($childScope6) }, "__tests__/template.marko", "7:2");
	}, (i) => "to-" + i, $scope0_id, "#text/6", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_6*shell", $scope0_reason, 0);
	_for_until(input.end, input.start, 2, (i) => {
		const $scope7_id = _scope_id();
		_set_scope_reason(0);
		const $childScope7 = _patch_child($scope7_id, "#childScope/0", 6);
		field_default({
			name: i,
			heading
		});
		_patch_child_end();
		_scope($scope7_id, { "#childScope/0": _existing_scope($childScope7) }, "__tests__/template.marko", "8:2");
	}, 0, $scope0_id, "#text/7", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_7*shell", $scope0_reason, 0);
	_for_until(input.end, input.start, 2, (i) => {
		const $scope8_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
		const $childScope8 = _patch_child($scope8_id, "#childScope/0", 7);
		field_default({
			name: i,
			heading
		});
		_patch_child_end();
		_scope($scope8_id, { "#childScope/0": _existing_scope($childScope8) }, "__tests__/template.marko", "9:2");
	}, (i) => "until-" + i, $scope0_id, "#text/8", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_8*shell", $scope0_reason, 0);
	_scope($scope0_id, {
		input_end: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.end,
		input_start: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.start,
		heading: _unfilled_if($scope0_reason, 1) && heading
	}, "__tests__/template.marko", 0, {
		input_end: ["input.end"],
		input_start: ["input.start"],
		heading: "1:5"
	}) || (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.end, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.start, !_server_guard($scope0_reason, 5)));
}, 1);
