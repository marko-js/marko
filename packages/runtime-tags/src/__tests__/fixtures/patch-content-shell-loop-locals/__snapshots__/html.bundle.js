// tags/holder.marko
_shells({ b: "b," });
var holder_default = _template_patch("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.tab;
});

// tags/src.marko
const $template$1 = "";
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("");
_shells({
	c0: "c0 !c1; D ;<button> </button>",
	c: /*@__PURE__*/ ((_w0) => `c;${((_w0) => `0${_w0}&`)("")};${_w0}`)("")
});
var src_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $tab;
	forOf(input.items, (t) => {
		$tab = attrTags($tab, { content: _content_elide("c0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>${_patch_text($scope1_id, "b", t)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "c1");
			_patch_write($scope1_id, "c", t, 1);
			_scope($scope1_id, { c: t });
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let h = holder_default({ tab: $tab });
	_client_guard($scope0_reason, 0) && _var($scope0_id, "b", $childScope, "c2");
	const $return = h;
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
	return $return;
});

// tags/view.marko
const $template = "<!><!><!>";
_shells({
	d: "d !;b%;<!><!><!>",
	d0: "d0;b%;<!><!><!>",
	d1: "d1;b%;<!><!><!>"
});
var view_default = _template_patch("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tabs = _source_guard($scope0_reason, 1), $scope0_page = _page_render(), $wg__input_selected = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.tabs, (tab, i) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				const $tag = tab.content;
				_dynamic_tag($scope2_id, "a", $tag, {}, 0, 0, $wg__input_tabs, void 0, _patch_dynamic_tag($scope2_id, "a", $tag, 0, 0, 0, $scope0_reason, 1));
				$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_selected, void 0, void 0, void 0, ["d1"], $scope0_reason, 0);
		$scope0_page && _scope($scope1_id, {
			d: _unfilled_if($scope0_reason, 2) && tab?.content,
			M: _unfilled_if($scope0_reason, 2) && i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "d0", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 1) && input.selected }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "d2", input.selected);
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks, "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template)}`)() });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let tabs = src_default({ items: input.items });
	_client_guard($scope0_reason, 1) && _var($scope0_id, "b", $childScope, "a0");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope2);
	view_default({
		tabs,
		selected: input.selected
	});
	$scope0_page && _scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
