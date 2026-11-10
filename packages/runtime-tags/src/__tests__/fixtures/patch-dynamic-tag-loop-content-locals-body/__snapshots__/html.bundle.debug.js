// tags/tabs.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/tabs.marko": "__tests__/tags/tabs.marko;b%;<!><!><!>",
	"__tests__/tags/tabs.marko_1*shell": "__tests__/tags/tabs.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/tabs.marko_2*shell": "__tests__/tags/tabs.marko_2*shell;b%;<!><!><!>"
});
var tabs_default = _template("__tests__/tags/tabs.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _write_guard($scope0_reason, 1), $wg__input_selected = _write_guard($scope0_reason, 2), $cg__input_selected = _client_guard($scope0_reason, 2), $wi__input_tab__OR__input_selected = _write_if($scope0_reason, 0), $ui__input_tab = _unfilled_if($scope0_reason, 1), $fg__input_selected = _filled_guard($scope0_reason, 2), $cg__input_tab = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.tab, (tab, i) => {
		const $scope1_id = _scope_id(), $ui__input_selected = _unfilled_if($scope0_reason, 2), $fg__input_tab = _filled_guard($scope0_reason, 1);
		$fg__input_tab && $ui__input_selected && _patch_write($scope1_id, "PatchMarkedWrite:tab_content", tab?.content, !_server_guard($scope0_reason, 1));
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", tab.content, {}, 2, 0, 0, $wg__input_tab, $scope0_reason, 1);
				$cg__input_tab && _patch_render($scope2_id, "__tests__/tags/tabs.marko_2_tab_content#1:3/setup");
				$wi__input_tab__OR__input_selected && _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope1_id) }, "__tests__/tags/tabs.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_selected, 1, 0, 0, ["__tests__/tags/tabs.marko_2*shell"], $scope0_reason, 0);
		$fg__input_tab && $cg__input_selected && _patch_render($scope1_id, "__tests__/tags/tabs.marko_2_tab_content#1:3/setup", "tab_content");
		$cg__input_selected && _patch_render($scope1_id, "__tests__/tags/tabs.marko_1_input_selected#0:4/setup");
		$wi__input_tab__OR__input_selected && _scope($scope1_id, {
			tab_content: ($ui__input_selected || _unfilled_if($scope0_reason, 1)) && tab?.content,
			"#LoopKey": $ui__input_selected && i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/tabs.marko", "1:2", {
			tab_content: ["tab.content", "1:6"],
			"#LoopKey": "1:11"
		});
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/tabs.marko_1*shell", $scope0_reason, 1);
	$fg__input_selected && $cg__input_tab && _patch_render($scope0_id, "__tests__/tags/tabs.marko_1_input_selected#0:4/setup", "input_selected");
	_scope($scope0_id, { input_selected: ($ui__input_tab || _unfilled_if($scope0_reason, 2)) && input.selected }, "__tests__/tags/tabs.marko", 0, { input_selected: ["input.selected"] }) || $fg__input_selected && $ui__input_tab && _patch_write($scope0_id, "PatchMarkedWrite:input_selected", input.selected, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content; ; ",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D l%;<b> </b><!><!>",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_wrap = _client_guard($scope0_reason, 4), $ui__input_selected__OR__input_items = _unfilled_if($scope0_reason, 0), $fg__input_wrap = _filled_guard($scope0_reason, 4), $wi__input_wrap = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_wrap__closures = new Set();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 3) << 3 | _updates_from($scope0_reason, 2) << 5);
	let $tab;
	forOf(input.items, (t) => $tab = attrTags($tab, { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__t = _write_if($scope1_reason, 0);
		const $scope1_id = _scope_id(), $ui__input_wrap = _unfilled_if($scope0_reason, 4);
		const $tab_content__t__closures = new Set();
		_html(`<b>${_text_mark($scope1_id, "#text/0", t, 1, 4, 0)}</b>`);
		_dynamic_tag($scope1_id, "#text/1", input.wrap, {}, 2, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(_text_mark($scope2_id, "#text/0", t, 2, 4, 0));
			_unfilled_if() && _patch_subscribe($scope2_id, "__tests__/template.marko_2_t#1:2/subscribe");
			_subscribe(_unfilled_if() && $wi__t && $tab_content__t__closures, _scope($scope2_id, { _: ($wi__input_wrap || $wi__t) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:25"), "__tests__/template.marko_2_t#1:2/subscribe");
		}, $scope1_id, ($scope) => $scope1_page ? [{ t }] : []), 0, _write_guard($scope0_reason, 4), $scope0_reason, 4, 0, void 0, 0, 0, "__tests__/template.marko_2*content");
		_patch_subscribers($scope1_id, "__tests__/template.marko_1_t#2/subscribers", "t");
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_wrap#0:5/subscribe", $cg__input_wrap);
		_subscribe($ui__input_wrap && $input_wrap__closures, _scope($scope1_id, {
			t: $ui__input_wrap && t,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			"ClosureScopes:t/7": $wi__t && $tab_content__t__closures
		}, "__tests__/template.marko", "3:6", { t: "2:8" }), $cg__input_wrap && "__tests__/template.marko_1_input_wrap#0:5/subscribe");
		(_client_branch_if("__tests__/template.marko_2*content", $scope1_id) || $ui__input_wrap) && _patch_write($scope1_id, "PatchMarkedWrite:t", t);
	}, $scope0_id, () => [{ t }]) }));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 1);
	tabs_default({
		selected: input.selected,
		tab: _patch_live($childScope, $tab, $scope0_id, "input_items")
	});
	_patch_child_end();
	$fg__input_wrap && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_wrap#5/subscribers", "input_wrap");
	_scope($scope0_id, {
		input_wrap: ($ui__input_selected__OR__input_items || _unfilled_if($scope0_reason, 4)) && input.wrap,
		"ClosureScopes:input_wrap/6": $wi__input_wrap && $input_wrap__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_wrap: ["input.wrap"] }) || $fg__input_wrap && $ui__input_selected__OR__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_wrap", input.wrap, !_server_guard($scope0_reason, 4));
}, 1);
