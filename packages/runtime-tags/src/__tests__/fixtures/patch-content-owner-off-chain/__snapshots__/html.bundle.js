// tags/holder.marko
const $setup$3 = [[], []];
_shells({ b: "b," });
var holder_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.tab;
});

// tags/src.marko
const $template$1 = "";
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("");
const $setup$2 = _shell_setup([[], []], ["a>", $setup$3]);
_shells({
	c2: "c2 c1!c0; D%c%;<button><!> <!></button>",
	c: `c${_shell_marker($setup$2)};${((_w0) => `0${_w0}&`)("")};${""}`
});
var src_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_items = _unfilled_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	let $tab;
	forOf(input.items, (t) => $tab = attrTags($tab, { content: _content("c2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<button>${_text_mark($scope1_id, "b", t, 1, 4, 0)} ${_text_mark($scope1_id, "c", count, 2)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "c0");
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c1");
	}, $scope0_id, 0) }));
	const $childScope = _peek_scope_id($scope0_id, "a", 0, $ui__input_items && 1);
	let h = holder_default({ tab: $tab });
	$ui__input_items && _var($scope0_id, "b", $childScope, "c3");
	_patch_child_end();
	const $return = h;
	_patch_fill($scope0_id, "vc4", count, 1);
	_scope($scope0_id, {
		f: count,
		h: $count__closures,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
	return $return;
});

// tags/view.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	d: "d;b%;<!><!><!>",
	d2: "d2;b%;<!><!><!>",
	d1: "d1;b%;<!><!><!>"
});
var view_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tabs = _write_guard($scope0_reason, 1), $wg__input_selected = _write_guard($scope0_reason, 2), $wi__input_tabs__OR__input_selected = _write_if($scope0_reason, 0), $ui__input_tabs = _unfilled_if($scope0_reason, 1), $fg__input_selected = _filled_guard($scope0_reason, 2), $cg__input_tabs = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.tabs, (tab, i) => {
		const $scope1_id = _scope_id(), $ui__input_selected = _unfilled_if($scope0_reason, 2);
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", tab.content, {}, 2, 0, 0, $wg__input_tabs, $scope0_reason, 1);
				$cg__input_tabs && _patch_render($scope2_id, "d0");
				$wi__input_tabs__OR__input_selected && _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_selected, 1, 0, 0, ["d1"], $scope0_reason, 0);
		_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "d3");
		$wi__input_tabs__OR__input_selected && _scope($scope1_id, {
			d: ($ui__input_selected || _unfilled_if($scope0_reason, 1)) && tab?.content,
			M: $ui__input_selected && i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "d2", $scope0_reason, 1);
	$fg__input_selected && $cg__input_tabs && _patch_render($scope0_id, "d3", "e");
	_scope($scope0_id, { e: ($ui__input_tabs || _unfilled_if($scope0_reason, 2)) && input.selected }) || $fg__input_selected && $ui__input_tabs && _patch_write($scope0_id, "xe", input.selected, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$2], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&b/${_w1}&b`)($walks, "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_items = _unfilled_if($scope0_reason, 1), $uf__input_items = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_items << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0, $ui__input_items && 1);
	let tabs = src_default({ items: input.items });
	$ui__input_items && _var($scope0_id, "b", $childScope, "a0");
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
}, 1);
