// tags/label.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko," });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_k = _filled_guard($scope0_reason, 1), $fg__rest = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { k, ...rest } = input;
	_script($scope0_id, "__tests__/tags/label.marko_0_k#2_rest#3", 0, ($fg__input_k || $fg__rest) && (_client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? 2 : 1), [$fg__input_k && "k", $fg__rest && "rest"], "__tests__/tags/label.marko_0_k#2_rest#3/setup", $scope0_reason, 0);
	_scope($scope0_id, {
		k,
		rest
	}, "__tests__/tags/label.marko", 0, {
		k: "1:10",
		rest: "1:16"
	}) || ($fg__input_k && _patch_write($scope0_id, "PatchMarkedWrite:k", k, !_server_guard($scope0_reason, 1)), $fg__rest && _patch_write($scope0_id, "PatchMarkedWrite:rest", rest, !_server_guard($scope0_reason, 2), input));
});

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("")};${""}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_title << 1 | $uf__input_title << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	label_default(_patch_live($childScope, {
		k: 1,
		title: _patch_live($childScope, input.title, $scope0_id, "input_title"),
		item: _patch_live($childScope, { label: input.title }, $scope0_id, "input_title")
	}, $scope0_id, "input_title"));
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
}, 1);
