// tags/child.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko; ;<output></output>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_item = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_item#3", 1, $fg__input_item);
	_scope($scope0_id, { input_item: input.item }, "__tests__/tags/child.marko", 0, { input_item: ["input.item"] }) || $fg__input_item && _patch_write($scope0_id, "PatchMarkedWrite:input_item", input.item, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${$template$1}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_flag__OR__input_title = _unfilled_if($scope0_reason, 0), $ui__input_title = _unfilled_if($scope0_reason, 2), $ui__input_flag = _unfilled_if($scope0_reason, 1), $fg__input_flag = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({ item: input.flag && { t: input.title } });
	_patch_child_end();
	_patch_render($scope0_id, "__tests__/template.marko_0_input_flag#3_input_title#4/setup", (($fg__input_flag ? " input_flag" : "") + ($fg__input_title ? " input_title" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_flag: ($ui__input_title || $ui__input_flag__OR__input_title) && input.flag,
		input_title: ($ui__input_flag || $ui__input_flag__OR__input_title) && input.title,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_title: ["input.title"]
	}) || ($fg__input_flag && $ui__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_flag", input.flag, !_server_guard($scope0_reason, 1)), $fg__input_title && $ui__input_flag && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 2)));
}, 1);
