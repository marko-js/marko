// tags/tree.marko
const $template$1 = "<!><!><span> </span>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/tree.marko": "__tests__/tags/tree.marko !;b%bD ;<!><!><span> </span>",
	"__tests__/tags/tree.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/tree.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1)}`)()
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_depth = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			$content({
				depth: input.depth - 1,
				get: input.get
			});
			_patch_child_end();
			$cg__input_depth && _patch_init($scope1_id, "__tests__/tags/tree.marko_1_input_depth#0:4/init");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/tree.marko_1_input_get#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/tree.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/tags/tree.marko_1*shell"], $scope0_reason, 1);
	_html(`<span>${_patch_text($scope0_id, "#text/1", input.depth, void 0, $scope0_reason, 1)}</span>`);
	_scope($scope0_id, { input_get: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.get }, "__tests__/tags/tree.marko", 0, { input_get: ["input.get"] }) || _filled_guard($scope0_reason, 2) && $cg__input_depth && _patch_fill($scope0_id, "PatchFill:__tests__/tags/tree.marko_fill0", input.get, !_server_guard($scope0_reason, 2));
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const getTitle = _bind_resume(() => input.title, "__tests__/template.marko_0/getTitle", $scope0_id);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	tree_default({
		depth: 2,
		get: getTitle
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0_getTitle#4", 1, _filled_guard($scope0_reason, 0), "getTitle");
	_scope($scope0_id, {
		input_title: input.title,
		getTitle,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		getTitle: "1:8"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:getTitle", getTitle, !$sg__input_title);
}, 1);
