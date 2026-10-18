// tags/holder.marko
_shells({ b: "b," });
var holder_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.tab;
});

// tags/src.marko
const $template$3 = "";
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("");
_shells({
	d0: "d0 d5!d1; D%c%;<button><!> <!></button>",
	d: /*@__PURE__*/ ((_w0) => `d;${((_w0) => `0${_w0}&`)("")};${_w0}`)("")
});
var src_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	let $tab;
	forOf(input.items, (t) => {
		$tab = attrTags($tab, { content: _content_elide("d0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button>${_patch_text($scope1_id, "b", t)} ${_text_resume($scope1_id, "c", count, 2)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "d1");
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id) });
	});
	const $childScope = _patch_child($scope0_id, "a");
	let h = holder_default({ tab: $tab });
	_client_guard($scope0_reason, 0) && _var($scope0_id, "b", $childScope, "d2");
	const $return = h;
	_patch_value($scope0_id, "vd3", count, 1);
	$scope0_page && _scope($scope0_id, {
		f: count,
		h: $count__closures,
		a: _existing_scope($childScope)
	});
	return $return;
});

// tags/view.marko
const $template$2 = "<!><!><!>";
_shells({
	e: "e;b%;<!><!><!>",
	e0: "e0;b%;<!><!><!>",
	e1: "e1;b%;<!><!><!>"
});
var view_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tabs = _write_guard($scope0_reason, 1), $wg__input_selected = _write_guard($scope0_reason, 2), $wi__input_tabs__OR__input_selected = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.tabs, (tab, i) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", tab.content, {}, 0, 0, $wg__input_tabs, void 0, 2, $scope0_reason, 1);
				_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "e2");
				$wi__input_tabs__OR__input_selected && _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_selected, void 0, void 0, void 0, ["e1"], $scope0_reason, 0);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "e3");
		$wi__input_tabs__OR__input_selected && _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && tab?.content,
			M: _unfilled_if($scope0_reason, 2) && i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "e0", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.selected }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "ve4", input.selected, !_server_guard($scope0_reason, 2));
});

// tags/page.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$3, $template$2);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks$1, "b%c");
_shells({ c: /*@__PURE__*/ (() => `c;${((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks$1, "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$3, $template$2)}`)() });
var page_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	let tabs = src_default({ items: input.items });
	_client_guard($scope0_reason, 1) && _var($scope0_id, "b", $childScope, "c0");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _patch_child($scope0_id, "c");
	view_default({
		tabs,
		selected: input.selected
	});
	$scope0_page && _scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
});

// tags/wrap.marko
const $template = "<!><!><!>";
_shells({
	f: "f;b%;<!><!><!>",
	f0: /*@__PURE__*/ (() => `f0;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var wrap_default = _template("f", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 3) << 5);
			const $childScope = _patch_child($scope1_id, "a");
			page_default({
				items: input.items,
				selected: input.selected
			});
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "f1");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "f2");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["f0"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.items,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.selected
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vf3", input.items, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.items), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vf4", input.selected, !_server_guard($scope0_reason, 3)));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope = _patch_child($scope0_id, "a");
	wrap_default({
		show: input.show,
		items: input.items,
		selected: input.selected
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
