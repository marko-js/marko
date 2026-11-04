// tags/grand.marko
const $template$2 = "<div></div>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/grand.marko": "__tests__/tags/grand.marko; ;<div></div>" });
var grand_default = _template("__tests__/tags/grand.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_v = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_mark($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/grand.marko_0_input_v#3", 1, $fg__input_v);
	_scope($scope0_id, { input_v: input.v }, "__tests__/tags/grand.marko", 0, { input_v: ["input.v"] }) || $fg__input_v && _patch_write($scope0_id, "PatchMarkedWrite:input_v", input.v, !_server_guard($scope0_reason, 0));
});

// tags/child.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/child.marko": `__tests__/tags/child.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)(" b")};${$template$2}` });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.opts;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	grand_default({ v: o.label });
	_patch_child_end();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_0_o#4/fill", { label: o?.label }, 1);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/child.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			child_default({ opts: {
				label: input.label,
				n: "SECRET_"
			} });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, { input_label: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
}, 1);
