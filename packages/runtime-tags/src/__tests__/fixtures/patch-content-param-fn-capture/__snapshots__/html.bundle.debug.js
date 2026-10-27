// tags/reader.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/reader.marko": "__tests__/tags/reader.marko; ;<output></output>" });
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0_get#3", 1, _filled_guard($scope0_reason, 0), "get");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/reader.marko", 0, { get: "1:10" }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:get", input.get, !_server_guard($scope0_reason, 0));
});

// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !;b%;<!><!><!>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $cg__input_x = _client_guard($scope0_reason, 2), $cg__input_content = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, { x: input.x }, 1, 0, 0, $wg__input_content__OR__input_x, $scope0_reason, 0, 0, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/wrap.marko_0_input_content#3_input_x#4/init");
	_scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		input_x: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.x
	}, "__tests__/tags/wrap.marko", 0, {
		input_content: ["input.content"],
		input_x: ["input.x"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_x && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill0", input.content, !_server_guard($scope0_reason, 1)), $cg__input_x && _content_withhold(input.content), _filled_guard($scope0_reason, 2) && $cg__input_content && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill1", input.x, !_server_guard($scope0_reason, 2)), $cg__input_content && _content_withhold(input.x));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope2 = _patch_child($scope0_id, "#childScope/0", 1);
	wrap_default({
		x: input.v,
		content: _content_resume("__tests__/template.marko_1*content", ({ x }) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			reader_default({ get: _bind_resume(function() {
				return x;
			}, "__tests__/template.marko_1/get", $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				x,
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2", { x: "1:9" });
		}, $scope0_id, void 0, 1)
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
}, 1);
