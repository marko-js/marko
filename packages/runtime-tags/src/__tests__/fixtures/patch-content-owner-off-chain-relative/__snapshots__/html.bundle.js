// tags/holder.marko
const $setup$5 = [[], []];
_shells({ b: "b," });
var holder_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.tab;
});

// tags/src.marko
const $template$3 = "";
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("");
const $setup$4 = _shell_setup([[], []], ["a>", $setup$5]);
_shells({
	d2: "d2 d1!d0; D%c%;<button><!> <!></button>",
	d: `d${_shell_marker($setup$4)};${((_w0) => `0${_w0}&`)("")};${""}`
});
var src_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_items = _unfilled_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	let $tab;
	forOf(input.items, (t) => $tab = attrTags($tab, { content: _content("d2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>${_text_mark($scope1_id, "b", t, 1, 4, 0)} ${_text_mark($scope1_id, "c", count, 2)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "d0");
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "d1");
	}, $scope0_id, 0) }));
	const $childScope = _peek_scope_id($scope0_id, "a", 0, $ui__input_items && 1);
	let h = holder_default({ tab: _patch_live($childScope, $tab, $scope0_id, "e") });
	$ui__input_items && _var($scope0_id, "b", $childScope, "d3");
	_patch_child_end();
	const $return = h;
	_patch_fill($scope0_id, "vd4", count, 1);
	_scope($scope0_id, {
		f: count,
		h: $count__closures,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
	return $return;
});

// tags/view.marko
const $template$2 = "<!><!><!>";
const $setup$3 = [[], []];
_shells({
	e: "e;b%;<!><!><!>",
	e2: "e2;b%;<!><!><!>",
	e1: "e1;b%;<!><!><!>"
});
var view_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tabs = _write_guard($scope0_reason, 1), $wg__input_selected = _write_guard($scope0_reason, 2), $cg__input_selected = _client_guard($scope0_reason, 2), $wi__input_tabs__OR__input_selected = _write_if($scope0_reason, 0), $ui__input_tabs = _unfilled_if($scope0_reason, 1), $fg__input_selected = _filled_guard($scope0_reason, 2), $cg__input_tabs = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.tabs, (tab, i) => {
		const $scope1_id = _scope_id(), $ui__input_selected = _unfilled_if($scope0_reason, 2), $fg__input_tabs = _filled_guard($scope0_reason, 1);
		$fg__input_tabs && $ui__input_selected && _patch_write($scope1_id, "xd", tab?.content, !_server_guard($scope0_reason, 1));
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", tab.content, {}, 2, 0, 0, $wg__input_tabs, $scope0_reason, 1);
				$cg__input_tabs && _patch_render($scope2_id, "e0");
				$wi__input_tabs__OR__input_selected && _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_selected, 1, 0, 0, ["e1"], $scope0_reason, 0);
		$fg__input_tabs && $cg__input_selected && _patch_render($scope1_id, "e0", "d");
		$cg__input_selected && _patch_render($scope1_id, "e3");
		$wi__input_tabs__OR__input_selected && _scope($scope1_id, {
			d: ($ui__input_selected || _unfilled_if($scope0_reason, 1)) && tab?.content,
			M: $ui__input_selected && i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "e2", $scope0_reason, 1);
	$fg__input_selected && $cg__input_tabs && _patch_render($scope0_id, "e3", "e");
	_scope($scope0_id, { e: ($ui__input_tabs || _unfilled_if($scope0_reason, 2)) && input.selected }) || $fg__input_selected && $ui__input_tabs && _patch_write($scope0_id, "xe", input.selected, !_server_guard($scope0_reason, 2));
});

// tags/page.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$3, $template$2);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks$1, "b%c");
const $setup$2 = _shell_setup([[], []], ["a>", $setup$4], ["c>", $setup$3]);
_shells({ c: `c${_shell_marker($setup$2)};${((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks$1, "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$3, $template$2)}` });
var page_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_items = _unfilled_if($scope0_reason, 1), $uf__input_items = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_items << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0, $ui__input_items && 1);
	let tabs = src_default({ items: input.items });
	$ui__input_items && _var($scope0_id, "b", $childScope, "c0");
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | $uf__input_items << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "c", 1);
	view_default({
		tabs,
		selected: input.selected
	});
	_patch_child_end();
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
});

// tags/wrap.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	f: "f;b%;<!><!><!>",
	f2: `f2${_shell_marker([[], []], ["a>", $setup$2])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var wrap_default = _template("f", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_items = _filled_guard($scope0_reason, 2), $fg__input_selected = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 3) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			page_default({
				items: input.items,
				selected: input.selected
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "f0");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "f1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["f2"], $scope0_reason, 1);
	$fg__input_items && $cg__input_show && _patch_render($scope0_id, "f0", "e");
	$fg__input_selected && $cg__input_show && _patch_render($scope0_id, "f1", "f");
	_scope($scope0_id, {
		e: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.items,
		f: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.selected
	}) || ($fg__input_items && $ui__input_show && _patch_write($scope0_id, "xe", input.items, !_server_guard($scope0_reason, 2)), $fg__input_selected && $ui__input_show && _patch_write($scope0_id, "xf", input.selected, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 3) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({
		show: input.show,
		items: input.items,
		selected: input.selected
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
