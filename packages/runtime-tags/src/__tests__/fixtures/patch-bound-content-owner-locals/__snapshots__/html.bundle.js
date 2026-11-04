// tags/host.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b1: "b1;D%c%;<i><!>:<!></i>",
	b: "b;b%;<!><!><!>",
	b3: "b3;b%;<!><!><!>"
});
var host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 8), $scope0_page = _page_render(), $wg__input_wrap__OR__input_items = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_wrap__OR__input_items__OR__input_label = _write_if($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 5), $fg__input_wrap = _filled_guard($scope0_reason, 6), $fg__input_items = _filled_guard($scope0_reason, 7), $cg__input_show = _client_guard($scope0_reason, 5), $fg__input_label = _filled_guard($scope0_reason, 8);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let $item;
			forOf(input.items, (entry) => $item = attrTags($item, { content: _content_resume("b1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<i>${_text_mark($scope2_id, "a", entry.text, 1, 4, 0)}:${_text_mark($scope2_id, "b", input.label, 2, $scope0_reason, 8)}</i>`);
				_unfilled_if($scope0_reason, 8) && _patch_subscribe($scope2_id, "b0", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 8) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_wrap__OR__input_items__OR__input_label && _scope_with_id($scope1_id) }), $cg__input_label && "b0");
			}, $scope1_id, ($scope) => $scope0_page ? [
				{ 2: entry?.text },
				{ g: input.label },
				{ _: $scope($scope0_id) }
			] : [{ 2: entry?.text }]) }));
			_dynamic_tag($scope1_id, "a", input.wrap, { item: $item }, 1, 0, 0, $wg__input_wrap__OR__input_items, $scope0_reason, 2, 0, 6, void 0, 0, "b1");
			_patch_render($scope1_id, "b2", [_filled_guard($scope0_reason, 6) && ">e", _filled_guard($scope0_reason, 7) && ">f"], $scope0_reason, 2);
			$wi__input_show__OR__input_wrap__OR__input_items__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b3"], $scope0_reason, 5);
	$fg__input_wrap && $cg__input_show && _patch_render($scope0_id, "b4", "e");
	$fg__input_items && $cg__input_show && _patch_render($scope0_id, "b5", "f");
	$fg__input_label && _patch_subscribers($scope0_id, "b6", "g");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.wrap,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.items,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 8)) && input.label,
		j: _write_if($scope0_reason, 8) && $input_label__closures
	}) || ($fg__input_wrap && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.wrap, !_server_guard($scope0_reason, 6)), $fg__input_items && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.items, !_server_guard($scope0_reason, 7)), $fg__input_label && (_client_branch_if("b1", $scope0_id) || _unfilled_if($scope0_reason, 3)) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 8)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a3: "a3 !a0",
	a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)("b%c")};${((_w0) => `<main>${_w0}</main>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 3) << 5 | _updates_from($scope0_reason, 0) << 7 | _updates_from($scope0_reason, 1) << 9 | _updates_from($scope0_reason, 2) << 11 | _updates_from($scope0_reason, 3) << 15 | _updates_from($scope0_reason, 4) << 17);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	host_default({
		show: input.show,
		items: input.items,
		label: input.label,
		wrap: attrTag({ content: _content_resume("a3", ({ item }) => {
			const $scope1_reason = _scope_reason(), $wg__item = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "xe", item);
			let open = true;
			_html(`<button class=toggle>toggle</button>${_el_mark($scope1_id, "a")}`);
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_for_of(item, (entry) => {
						const $scope3_id = _scope_id();
						_dynamic_tag($scope3_id, "a", entry.content, {}, 0, 0, 0, $wg__item);
						_write_if($scope1_reason, 0) && _scope($scope3_id, {});
					}, 0, $scope2_id, "a", $wg__item, $wg__item);
					_scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "b");
			_script($scope1_id, "a0");
			_patch_render($scope1_id, "a1", "e");
			_patch_fill($scope1_id, "va2", open, 1);
			_scope($scope1_id, {
				e: item,
				f: open
			});
		}, $scope0_id) })
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
