// tags/tabs.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var tabs_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _write_guard($scope0_reason, 1), $wg__input_selected = _write_guard($scope0_reason, 2), $cg__input_selected = _client_guard($scope0_reason, 2), $wi__input_tab__OR__input_selected = _write_if($scope0_reason, 0), $ui__input_tab = _unfilled_if($scope0_reason, 1), $fg__input_selected = _filled_guard($scope0_reason, 2), $cg__input_tab = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.tab, (tab, i) => {
		const $scope1_id = _scope_id(), $ui__input_selected = _unfilled_if($scope0_reason, 2), $fg__input_tab = _filled_guard($scope0_reason, 1);
		$fg__input_tab && $ui__input_selected && _patch_write($scope1_id, "xd", tab?.content, !_server_guard($scope0_reason, 1));
		_if(() => {
			if (i === input.selected) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", tab.content, {}, 2, 0, 0, $wg__input_tab, $scope0_reason, 1);
				$cg__input_tab && _patch_render($scope2_id, "b0");
				$wi__input_tab__OR__input_selected && _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_selected, 1, 0, 0, ["b1"], $scope0_reason, 0);
		$fg__input_tab && $cg__input_selected && _patch_render($scope1_id, "b0", "d");
		$cg__input_selected && _patch_render($scope1_id, "b3");
		$wi__input_tab__OR__input_selected && _scope($scope1_id, {
			d: ($ui__input_selected || _unfilled_if($scope0_reason, 1)) && tab?.content,
			M: $ui__input_selected && i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b2", $scope0_reason, 1);
	$fg__input_selected && $cg__input_tab && _patch_render($scope0_id, "b3", "e");
	_scope($scope0_id, { e: ($ui__input_tab || _unfilled_if($scope0_reason, 2)) && input.selected }) || $fg__input_selected && $ui__input_tab && _patch_write($scope0_id, "xe", input.selected, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0;D ;<b> </b>",
	a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 1) << 5);
	let $tab;
	forOf(input.items, (t) => $tab = attrTags($tab, { content: _content_resume("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "a", t, 1, 4, 0)}</b>`);
		_scope($scope1_id, {});
	}, $scope0_id, () => [{ 1: t }]) }));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	tabs_default({
		selected: input.selected,
		tab: _patch_live($childScope, $tab, $scope0_id, "e")
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
