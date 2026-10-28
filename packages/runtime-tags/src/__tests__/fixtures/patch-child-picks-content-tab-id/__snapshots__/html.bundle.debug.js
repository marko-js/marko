// tags/tabs.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/tabs.marko": "__tests__/tags/tabs.marko !;b%;<!><!><!>" });
var tabs_default = _template("__tests__/tags/tabs.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab__OR__input_selected = _write_guard($scope0_reason, 0), $cg__input_selected = _client_guard($scope0_reason, 2), $cg__input_tab = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", [...input.tab].find((t) => t.id === input.selected)?.content, {}, 2, 0, 0, $wg__input_tab__OR__input_selected, $scope0_reason, 0);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/tabs.marko_0_input_tab#3_input_selected#4/init");
	_scope($scope0_id, {
		input_tab: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.tab,
		input_selected: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.selected
	}, "__tests__/tags/tabs.marko", 0, {
		input_tab: ["input.tab"],
		input_selected: ["input.selected"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_selected && _patch_fill($scope0_id, "PatchFill:__tests__/tags/tabs.marko_fill0", input.tab, !_server_guard($scope0_reason, 1)), $cg__input_selected && _content_withhold(input.tab), _filled_guard($scope0_reason, 2) && $cg__input_tab && _patch_fill($scope0_id, "PatchFill:__tests__/tags/tabs.marko_fill1", input.selected, !_server_guard($scope0_reason, 2)), $cg__input_tab && _content_withhold(input.selected));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_s#0:6/init",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	const $s__closures = new Set();
	let s = 0;
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	tabs_default({
		selected: input.x,
		tab: attrTags(attrTag({
			id: 1,
			content: _content_resume("__tests__/template.marko_1*content", () => {
				const $scope1_reason = _scope_reason();
				const $scope1_id = _scope_id();
				_html(`A${_text_resume($scope1_id, "#text/0", input.y, 2, $scope0_reason, 2)}`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_1_input_y#0:5/init" : "__tests__/template.marko_1_input_y#0:5/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_y__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"));
			}, $scope0_id)
		}), {
			id: 2,
			content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`B${_text_resume($scope2_id, "#text/0", s, 2)}`);
				_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
			}, $scope0_id)
		})
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_y: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.y,
		s,
		"ClosureScopes:input_y/7": _write_if($scope0_reason, 2) && $input_y__closures,
		"ClosureScopes:s/8": $s__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_y: ["input.y"],
		s: "1:6"
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.y, !_server_guard($scope0_reason, 2));
}, 1);
