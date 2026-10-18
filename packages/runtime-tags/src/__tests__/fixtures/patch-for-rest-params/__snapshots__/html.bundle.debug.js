// tags/my-for.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/my-for.marko": "__tests__/tags/my-for.marko !;b%;<!><!><!>",
	"__tests__/tags/my-for.marko_1*shell": "__tests__/tags/my-for.marko_1*shell;b%;<!><!><!>"
});
var my_for_default = _template("__tests__/tags/my-for.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_to__OR__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (...args) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, [...args], 0, 1, $wg__input_to__OR__input_content, void 0, 1, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/my-for.marko_1_input_content#0:4_args#1/init");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			args: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && args,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/my-for.marko", "1:2", { args: "1:6" });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/my-for.marko_1*shell", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.content }, "__tests__/tags/my-for.marko", 0, { input_content: ["input.content"] }) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/my-for.marko_fill0", input.content, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.content));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; ; ",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	my_for_default({
		to: 5,
		content: _content_elide("__tests__/template.marko_1*content", (i) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(_patch_text($scope1_id, "#text/0", i));
			_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
