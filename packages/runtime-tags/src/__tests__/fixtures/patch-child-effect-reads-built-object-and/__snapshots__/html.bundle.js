// tags/child.marko
const $template = "<output></output>";
const $setup$1 = [[], []];
_shells({ b: "b; ;<output></output>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_item = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, $fg__input_item, "d");
	_scope($scope0_id, { d: input.item }) || $fg__input_item && _patch_write($scope0_id, "xd", input.item, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_flag = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({ item: _patch_live($childScope, input.flag && { t: input.title }, $scope0_id, "d e") });
	_patch_child_end();
	_patch_render($scope0_id, "a0", [$fg__input_flag && "d", $fg__input_title && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.flag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.title,
		a: _existing_scope($childScope)
	}) || ($fg__input_flag && _patch_write($scope0_id, "xd", input.flag, !_server_guard($scope0_reason, 1)), $fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 2)));
}, 1);
