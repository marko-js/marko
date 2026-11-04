// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !; ;<div></div>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<div></div>${_el_mark($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_value_a_b#6");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_0_value#4/fill", { a: { b: value?.a?.b } }, 1);
	_scope($scope0_id, { value_a_b: value?.a?.b }, "__tests__/tags/child.marko", 0, { value_a_b: ["value.a.b", "1:6"] });
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_b = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			child_default({ data: _patch_live($childScope, {
				a: { b: input.b },
				n: "SECRET_"
			}, $scope1_id, ">input_b") });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_b#0:4/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_b && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_b#0:4/setup", "input_b");
	_scope($scope0_id, { input_b: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.b }, "__tests__/template.marko", 0, { input_b: ["input.b"] }) || $fg__input_b && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 1));
}, 1);
