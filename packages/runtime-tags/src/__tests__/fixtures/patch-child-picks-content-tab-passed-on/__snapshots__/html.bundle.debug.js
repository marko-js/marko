// tags/view.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/view.marko": "__tests__/tags/view.marko;b%;<!><!><!>" });
var view_default = _template("__tests__/tags/view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/view.marko", 0);
});

// tags/tabs.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/tabs.marko": /*@__PURE__*/ (() => `__tests__/tags/tabs.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}`)() });
var tabs_default = _template("__tests__/tags/tabs.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	view_default({ content: [...input.tab].find((t) => t.active)?.content });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/tabs.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_s#0:6/init;b%;B<!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;A<!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks$1)};${((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	const $s__closures = new Set();
	let s = 0;
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	tabs_default({ tab: attrTags(attrTag({
		active: input.x === 1,
		content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`A${_patch_text($scope1_id, "#text/0", input.y, 2, $scope0_reason, 2)}`);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_y#0:5/init");
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_y__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"));
		}, $scope0_id)
	}), {
		active: input.x === 2,
		content: _content_elide("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_html(`B${_text_resume($scope2_id, "#text/0", s, 2)}`);
			$scope2_page && _subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		}, $scope0_id)
	}) });
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_y: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.y,
		s,
		"ClosureScopes:input_y/7": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_y__closures,
		"ClosureScopes:s/8": $s__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_y: ["input.y"],
		s: "1:6"
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.y, !_server_guard($scope0_reason, 2));
}, 1);
