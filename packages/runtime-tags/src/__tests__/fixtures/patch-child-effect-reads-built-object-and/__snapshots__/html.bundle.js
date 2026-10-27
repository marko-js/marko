// tags/child.marko
const $template = "<output></output>";
const $setup$1 = [[], []];
_shells({ b: "b; ;<output></output>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, _filled_guard($scope0_reason, 0), "d");
	_scope($scope0_id, { d: input.item }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.item, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_flag = _server_guard($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({ item: _patch_live($childScope, input.flag && { t: input.title }, $scope0_id, "d e") });
	_patch_child_end();
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.flag,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.title,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "va0", input.flag, !$sg__input_flag) : _patch_write($scope0_id, "xd", input.flag, !$sg__input_flag)), _filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "va1", input.title, !$sg__input_title) : _patch_write($scope0_id, "xe", input.title, !$sg__input_title)));
}, 1);
