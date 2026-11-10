// tags/tree.marko
const $template$1 = "<!><!><span> </span>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/tree.marko": "__tests__/tags/tree.marko;b%bD ;<!><!><span> </span>",
	"__tests__/tags/tree.marko_1*shell": `__tests__/tags/tree.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1)}`
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_depth = _unfilled_if($scope0_reason, 1), $fg__input_get = _filled_guard($scope0_reason, 2), $cg__input_depth = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			$content({
				depth: input.depth - 1,
				get: input.get
			});
			_patch_child_end();
			$cg__input_depth && _patch_render($scope1_id, "__tests__/tags/tree.marko_1_input_depth#0:4/setup");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/tags/tree.marko_1_input_get#0:5/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/tree.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/tags/tree.marko_1*shell"], $scope0_reason, 1);
	_html(`<span>${_text_mark($scope0_id, "#text/1", input.depth, 1, $scope0_reason, 1)}</span>`);
	$fg__input_get && $cg__input_depth && _patch_render($scope0_id, "__tests__/tags/tree.marko_1_input_get#0:5/setup", "input_get");
	_scope($scope0_id, { input_get: ($ui__input_depth || _unfilled_if($scope0_reason, 2)) && input.get }, "__tests__/tags/tree.marko", 0, { input_get: ["input.get"] }) || $fg__input_get && $ui__input_depth && _patch_write($scope0_id, "PatchMarkedWrite:input_get", input.get, !_server_guard($scope0_reason, 2));
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const getTitle = _bind_resume(() => input.title, "__tests__/template.marko_0/getTitle", $scope0_id);
	_set_scope_reason($uf__input_title << 1 | $uf__input_title << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	tree_default({
		depth: 2,
		get: getTitle
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0_getTitle#4", 0, $fg__input_title, ["getTitle", "input_title"]);
	_scope($scope0_id, {
		input_title: input.title,
		getTitle,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		getTitle: "1:8"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:getTitle", getTitle, !$sg__input_title);
}, 1);
