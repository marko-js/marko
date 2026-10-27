// tags/label-view.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label-view.marko": "__tests__/tags/label-view.marko !;D ;<p> </p>" });
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : null;
	_html(`<p>${_patch_text($scope0_id, "#text/0", get && get(), void 0, $scope0_reason, 0)}</p>`);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/label-view.marko_0_input_flag#3_input_a#4/init");
	_scope($scope0_id, {
		input_flag: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.flag,
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a
	}, "__tests__/tags/label-view.marko", 0, {
		input_flag: ["input.flag"],
		input_a: ["input.a"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/label-view.marko_fill0", input.flag, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/label-view.marko_fill1", input.a, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const up = () => "U" + input.title;
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	label_view_default({
		a: up,
		flag: true
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
