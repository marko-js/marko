// tags/tabs.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/tabs.marko": "__tests__/tags/tabs.marko !;b%;<!><!><!>",
	"__tests__/tags/tabs.marko_1*shell": "__tests__/tags/tabs.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/tabs.marko_2*shell": "__tests__/tags/tabs.marko_2*shell;b%;<!><!><!>"
});
var tabs_default = _template_patch("__tests__/tags/tabs.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _source_guard($scope0_reason, 1), $scope0_page = _page_render(), $wg__input_selected = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.tab, (tab, i) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				const $tag = tab.content;
				_dynamic_tag($scope2_id, "#text/0", $tag, {}, 0, 0, $wg__input_tab, void 0, _patch_dynamic_tag($scope2_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 1));
				$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/tabs.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_selected, void 0, void 0, void 0, ["__tests__/tags/tabs.marko_2*shell"], $scope0_reason, 0);
		$scope0_page && _scope($scope1_id, {
			tab_content: _unfilled_if($scope0_reason, 2) && tab?.content,
			"#LoopKey": _unfilled_if($scope0_reason, 2) && i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/tabs.marko", "1:2", {
			tab_content: ["tab.content", "1:6"],
			"#LoopKey": "1:11"
		});
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/tabs.marko_1*shell", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_selected: _unfilled_if($scope0_reason, 1) && input.selected }, "__tests__/tags/tabs.marko", 0, { input_selected: ["input.selected"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/tags/tabs.marko_fill0", input.selected);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	let $tab;
	forOf(input.items, (t) => {
		$tab = attrTags($tab, { content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "#text/0", t)}</b>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:6");
		}, $scope0_id, () => [{ t }]) });
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	tabs_default({
		selected: input.selected,
		tab: $tab
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
