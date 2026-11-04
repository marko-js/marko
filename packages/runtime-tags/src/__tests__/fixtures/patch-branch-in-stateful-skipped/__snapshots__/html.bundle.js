// tags/panel.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_label__OR__input_items = _write_guard($scope0_reason, 3), $ui__input_content__OR__input_label__OR__input_items = _unfilled_if($scope0_reason, 3), $fg__input_content = _filled_guard($scope0_reason, 4), $fg__input_label = _filled_guard($scope0_reason, 5), $fg__input_items = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {
		label: input.label,
		items: input.items
	}, 1, 0, 0, $wg__input_content__OR__input_label__OR__input_items, $scope0_reason, 3, 0, 4);
	_patch_render($scope0_id, "b0", (($fg__input_content ? " d" : "") + ($fg__input_label ? " e" : "") + ($fg__input_items ? " f" : "")).slice(1), $scope0_reason, 3);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_content__OR__input_label__OR__input_items && input.content,
		e: _write_if($scope0_reason, 1) && $ui__input_content__OR__input_label__OR__input_items && input.label,
		f: _write_if($scope0_reason, 0) && $ui__input_content__OR__input_label__OR__input_items && input.items
	}) || ($fg__input_content && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 4)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 5)), $fg__input_items && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.items, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label__OR__input_items = _updates_from($scope0_reason, 0), $uf__input_label = _updates_from($scope0_reason, 1), $uf__input_items = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_label << 1 | $uf__input_items << 3 | $uf__input_label__OR__input_items << 5 | $uf__input_label__OR__input_items << 7 | $uf__input_label << 11 | $uf__input_items << 13);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		label: input.label,
		items: input.items,
		content: _content_resume("a5", ({ label, items }) => {
			const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0), $wg__items = _write_guard($scope1_reason, 1), $wi__label = _write_if($scope1_reason, 0);
			const $scope1_id = _scope_id();
			const $panel_content__label__closures = /* @__PURE__ */ new Set();
			_patch_write($scope1_id, "xe", label) && _patch_subscribers($scope1_id, "a2", "e");
			_patch_write($scope1_id, "xf", items);
			let open = true;
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_if(() => {
						if (label) {
							const $scope3_id = _scope_id();
							_html(`<p>${_text_mark($scope3_id, "a", label, $wg__label)}</p>`);
							_subscribe($wi__label && $panel_content__label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0", $wg__label);
							return 0;
						}
					}, $scope2_id, "a", $wg__label, $wg__label, 0, 0, 1);
					_html("<ul>");
					_for_of(items, (item) => {
						const $scope4_id = _scope_id();
						_html(`<li>${_text_mark($scope4_id, "a", item, $wg__items)}</li>`);
						_write_if($scope1_reason, 1) && _scope($scope4_id, {});
					}, 0, $scope2_id, "b", $wg__items, $wg__items, $wg__items, "</ul>", 1);
					_scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "a");
			_html(`<button>toggle</button>${_el_mark($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			_patch_render($scope1_id, "a3", "e");
			_patch_render($scope1_id, "a4", "f");
			_scope($scope1_id, {
				e: label,
				f: items,
				g: open,
				h: $wi__label && $panel_content__label__closures
			});
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
