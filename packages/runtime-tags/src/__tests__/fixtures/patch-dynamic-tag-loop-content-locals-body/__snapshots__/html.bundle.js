// tags/tabs.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var tabs_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _write_guard($scope0_reason, 1), $wg__input_selected = _write_guard($scope0_reason, 2), $wi__input_tab__OR__input_selected = _write_if($scope0_reason, 0), $fg__input_selected = _filled_guard($scope0_reason, 2), $cg__input_tab = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.tab, (tab, i) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", tab.content, {}, 2, 0, 0, $wg__input_tab, $scope0_reason, 1);
				$cg__input_tab && _patch_render($scope2_id, "b0");
				$wi__input_tab__OR__input_selected && _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_selected, 1, 0, 0, ["b1"], $scope0_reason, 0);
		_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b3");
		$wi__input_tab__OR__input_selected && _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && tab?.content,
			M: _unfilled_if($scope0_reason, 2) && i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b2", $scope0_reason, 1);
	$fg__input_selected && $cg__input_tab && _patch_render($scope0_id, "b3", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.selected }) || $fg__input_selected && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.selected, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0; ; ",
	a4: "a4;D l%;<b> </b><!><!>",
	a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_wrap = _client_guard($scope0_reason, 4), $fg__input_wrap = _filled_guard($scope0_reason, 4), $wi__input_wrap = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_wrap__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 3) << 3 | _updates_from($scope0_reason, 2) << 5);
	let $tab;
	forOf(input.items, (t) => {
		$tab = attrTags($tab, { content: _content_resume("a4", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__t = _write_if($scope1_reason, 0);
			const $scope1_id = _scope_id();
			const $tab_content__t__closures = /* @__PURE__ */ new Set();
			_html(`<b>${_text_mark($scope1_id, "a", t, 1, 4, 0)}</b>`);
			_dynamic_tag($scope1_id, "b", input.wrap, {}, 2, _content_resume("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(_text_mark($scope2_id, "a", t, 2, 4, 0));
				_unfilled_if() && _patch_subscribe($scope2_id, "a1");
				_subscribe(_unfilled_if() && $wi__t && $tab_content__t__closures, _scope($scope2_id, { _: ($wi__input_wrap || $wi__t) && _scope_with_id($scope1_id) }), "a1");
			}, $scope1_id, ($scope) => $scope1_page ? [{ c: t }] : []), 0, _write_guard($scope0_reason, 4), $scope0_reason, 4, 0, void 0, 0, 0, "a0");
			_patch_subscribers($scope1_id, "a2", "c");
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a3", $cg__input_wrap);
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_wrap__closures, _scope($scope1_id, {
				c: _unfilled_if($scope0_reason, 4) && t,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				h: $wi__t && $tab_content__t__closures
			}), $cg__input_wrap && "a3");
			(_client_branch_if("a0", $scope1_id) || _unfilled_if($scope0_reason, 4)) && _patch_write($scope1_id, "xc", t);
		}, $scope0_id, () => [{ 2: t }]) });
	});
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	tabs_default({
		selected: input.selected,
		tab: $tab
	});
	_patch_child_end();
	$fg__input_wrap && _patch_subscribers($scope0_id, "a5", "f");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.wrap,
		g: $wi__input_wrap && $input_wrap__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_wrap && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.wrap, !_server_guard($scope0_reason, 4));
}, 1);
