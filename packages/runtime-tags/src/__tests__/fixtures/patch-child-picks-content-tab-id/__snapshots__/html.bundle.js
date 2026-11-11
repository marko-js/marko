// tags/tabs.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var tabs_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab__OR__input_selected = _write_guard($scope0_reason, 0), $ui__input_tab__OR__input_selected = _unfilled_if($scope0_reason, 0), $fg__input_tab = _filled_guard($scope0_reason, 1), $fg__input_selected = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", [...input.tab].find((t) => t.id === input.selected)?.content, {}, 2, 0, 0, $wg__input_tab__OR__input_selected, $scope0_reason, 0);
	_patch_render($scope0_id, "b0", (($fg__input_tab ? " d" : "") + ($fg__input_selected ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: $ui__input_tab__OR__input_selected && input.tab,
		e: $ui__input_tab__OR__input_selected && input.selected
	}) || ($fg__input_tab && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.tab, !_server_guard($scope0_reason, 1)), $fg__input_selected && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.selected, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["b>", $setup$1]);
_shells({
	a3: "a3 a1",
	a2: "a2",
	a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=s>s</button>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_y = _client_guard($scope0_reason, 2), $uf__input_x = _updates_from($scope0_reason, 1), $ui__input_x = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_html(`<button class=s>s</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason($uf__input_x << 1 | $uf__input_x << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	tabs_default({
		selected: input.x,
		tab: attrTags(attrTag({
			id: 1,
			content: _content_resume("a2", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(`A${_text_mark($scope1_id, "a", input.y, 2, $scope0_reason, 2)}`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a0", $cg__input_y);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_y__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_y && "a0");
			}, $scope0_id)
		}), {
			id: 2,
			content: _content_resume("a3", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`B${_text_mark($scope2_id, "a", s, 2)}`);
				_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a1");
			}, $scope0_id)
		})
	});
	_patch_child_end();
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: ($ui__input_x || _unfilled_if($scope0_reason, 2)) && input.y,
		g: s,
		h: _write_if($scope0_reason, 2) && $input_y__closures,
		i: $s__closures,
		b: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 2) && $ui__input_x && _patch_write($scope0_id, "xf", input.y, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a5", "f");
}, 1);
