// tags/tabs.marko
const $template = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var tabs_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _source_guard($scope0_reason, 1), $scope0_page = _page_render(), $wg__input_selected = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.tab, (tab, i) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				const $tag = tab.content;
				_dynamic_tag($scope2_id, "a", $tag, {}, 0, 0, $wg__input_tab, void 0, _patch_dynamic_tag($scope2_id, "a", $tag, 0, 0, 0, $scope0_reason, 1));
				$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_selected, void 0, void 0, void 0, ["b1"], $scope0_reason, 0);
		$scope0_page && _scope($scope1_id, {
			d: _unfilled_if($scope0_reason, 2) && tab?.content,
			M: _unfilled_if($scope0_reason, 2) && i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 1) && input.selected }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b2", input.selected);
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	let $tab;
	forOf(input.items, (t) => {
		$tab = attrTags($tab, { content: _content_resume("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "a", t)}</b>`);
			_scope($scope1_id, {});
		}, $scope0_id, () => [{ 1: t }]) });
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	tabs_default({
		selected: input.selected,
		tab: $tab
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
