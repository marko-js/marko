// tags/holder.marko
const $template$5 = "";
const $walks$5 = "";
_shells({ "__tests__/tags/holder.marko": "^__tests__/tags/holder.marko," });
var holder_default = _template_patch("__tests__/tags/holder.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.tab;
	return $return;
});

// tags/src.marko
const $template$4 = "";
const $walks$4 = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("");
_shells({
	"__tests__/tags/src.marko_1*content": "__tests__/tags/src.marko_1*content __tests__/tags/src.marko_1_count#0:5/init!__tests__/tags/src.marko_1; D%c%;<button><!> <!></button>",
	"__tests__/tags/src.marko": /*@__PURE__*/ ((_w0) => `^__tests__/tags/src.marko !;${((_w0) => `0${_w0}&`)("")};${_w0}`)("")
});
var src_default = _template_patch("__tests__/tags/src.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $tab;
	forOf(input.items, (t) => {
		$tab = attrTags($tab, { content: _content_elide("__tests__/tags/src.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>${_patch_text($scope1_id, "#text/1", t)} ${_text_resume($scope1_id, "#text/2", count, 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/tags/src.marko_1");
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/src.marko", "4:6"));
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let h = holder_default({ tab: $tab });
	_client_guard($scope0_reason, 0) && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/src.marko_0_h#6/var");
	const $return = h;
	_patch_value($scope0_id, "__tests__/tags/src.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:count/7": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/src.marko", 0, { count: "1:6" });
	return $return;
});

// tags/view.marko
const $template$3 = "<!><!><!>";
const $walks$3 = "b%c";
_shells({
	"__tests__/tags/view.marko": "__tests__/tags/view.marko !;b%;<!><!><!>",
	"__tests__/tags/view.marko_1*shell": "__tests__/tags/view.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/view.marko_2*shell": "__tests__/tags/view.marko_2*shell;b%;<!><!><!>"
});
var view_default = _template_patch("__tests__/tags/view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tabs = _source_guard($scope0_reason, 1), $scope0_page = _page_render(), $wg__input_selected = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.tabs, (tab, i) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				const $tag = tab.content;
				_dynamic_tag($scope2_id, "#text/0", $tag, {}, 0, 0, $wg__input_tabs, void 0, _patch_dynamic_tag($scope2_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 1));
				$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/view.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_selected, void 0, void 0, void 0, ["__tests__/tags/view.marko_2*shell"], $scope0_reason, 0);
		$scope0_page && _scope($scope1_id, {
			tab_content: _unfilled_if($scope0_reason, 2) && tab?.content,
			"#LoopKey": _unfilled_if($scope0_reason, 2) && i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/view.marko", "1:2", {
			tab_content: ["tab.content", "1:6"],
			"#LoopKey": "1:11"
		});
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/view.marko_1*shell", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_selected: _unfilled_if($scope0_reason, 1) && input.selected }, "__tests__/tags/view.marko", 0, { input_selected: ["input.selected"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/tags/view.marko_fill0", input.selected);
});

// tags/page.marko
const $template$2 = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$4, $template$3);
const $walks$2 = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks$4, "b%c");
_shells({ "__tests__/tags/page.marko": /*@__PURE__*/ (() => `__tests__/tags/page.marko;${((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks$4, "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$4, $template$3)}`)() });
var page_default = _template_patch("__tests__/tags/page.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let tabs = src_default({ items: input.items });
	_client_guard($scope0_reason, 1) && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/page.marko_0_tabs#7/var");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/2", $childScope2);
	view_default({
		tabs,
		selected: input.selected
	});
	$scope0_page && _scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/tags/page.marko", 0);
});

// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/wrap.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2)}`)()
});
var wrap_default = _template_patch("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 3) << 3 | _mask_group($scope0_reason, 4) << 5);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			page_default({
				items: input.items,
				selected: input.selected
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/wrap.marko_1*shell"], $scope0_reason, 2);
	$scope0_page ? _scope($scope0_id, {
		input_items: input.items,
		input_selected: input.selected
	}, "__tests__/tags/wrap.marko", 0, {
		input_items: ["input.items"],
		input_selected: ["input.selected"]
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "__tests__/tags/wrap.marko_fill0", input.items), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "__tests__/tags/wrap.marko_fill1", input.selected));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7 | _mask_group($scope0_reason, 4) << 9);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	wrap_default({
		show: input.show,
		items: input.items,
		selected: input.selected
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
