// tags/label.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko," });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_item = _filled_guard($scope0_reason, 0), $sg__input_item = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { k, ...rest } = input.item;
	_script($scope0_id, "__tests__/tags/label.marko_0_k#4_rest#5", 0, $fg__input_item, ["k", "rest"]);
	_scope($scope0_id, {
		k,
		rest
	}, "__tests__/tags/label.marko", 0, {
		k: "1:10",
		rest: "1:16"
	}) || ($fg__input_item && _patch_write($scope0_id, "PatchMarkedWrite:k", k, !$sg__input_item), $fg__input_item && _patch_write($scope0_id, "PatchMarkedWrite:rest", rest, !$sg__input_item, input.item));
});

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const o = { item: {
		label: input.title,
		k: 1
	} };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	_patch_live($childScope, o.item, $scope0_id, "input_title");
	label_default(o);
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
}, 1);
