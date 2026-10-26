// tags/panel.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b !;b%;<!><!><!>" });
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_label__OR__input_items = _write_guard($scope0_reason, 3), $cg__input_label__OR__input_items = _client_guard($scope0_reason, 2), $cg__input_content__OR__input_items = _client_guard($scope0_reason, 1), $cg__input_content__OR__input_label = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {
		label: input.label,
		items: input.items
	}, 0, 0, $wg__input_content__OR__input_label__OR__input_items, void 0, 1, $scope0_reason, 3, 0, 4);
	_client_guard($scope0_reason, 3) && _patch_init($scope0_id, "b3");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.content,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.label,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.items
	}) : (_filled_guard($scope0_reason, 4) && $cg__input_label__OR__input_items && _patch_fill($scope0_id, "vb0", input.content, !_server_guard($scope0_reason, 4)), $cg__input_label__OR__input_items && _content_withhold(input.content), _filled_guard($scope0_reason, 5) && $cg__input_content__OR__input_items && _patch_fill($scope0_id, "vb1", input.label, !_server_guard($scope0_reason, 5)), $cg__input_content__OR__input_items && _content_withhold(input.label), _filled_guard($scope0_reason, 6) && $cg__input_content__OR__input_label && _patch_fill($scope0_id, "vb2", input.items, !_server_guard($scope0_reason, 6)), $cg__input_content__OR__input_label && _content_withhold(input.items));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 1) << 11 | _mask_group($scope0_reason, 2) << 13);
	const $childScope = _patch_child($scope0_id, "a");
	panel_default({
		label: input.label,
		items: input.items,
		content: _content_resume("a2", ({ label, items }) => {
			const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0), $scope1_page = _page_render(), $wg__items = _write_guard($scope1_reason, 1), $wi__label = _write_if($scope1_reason, 0);
			const $scope1_id = _scope_id();
			const $panel_content__label__closures = /* @__PURE__ */ new Set();
			let open = true;
			if ($scope0_page) _if(() => {
				{
					const $scope2_id = _scope_id();
					_if(() => {
						if (label) {
							const $scope3_id = _scope_id();
							_html(`<p>${_text_resume($scope3_id, "a", label, $wg__label)}</p>`);
							$scope1_page && _subscribe($wi__label && $panel_content__label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0", $wg__label);
							return 0;
						}
					}, $scope2_id, "a", $wg__label, $wg__label, 0, 0, 1);
					_html("<ul>");
					_for_of(items, (item) => {
						const $scope4_id = _scope_id();
						_html(`<li>${_text_resume($scope4_id, "a", item, $wg__items)}</li>`);
						$scope1_page && _write_if($scope1_reason, 1) && _scope($scope4_id, {});
					}, 0, $scope2_id, "b", $wg__items, $wg__items, $wg__items, "</ul>", 1);
					$scope1_page && _scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "a");
			_html(`<button>toggle</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			$scope1_page && _scope($scope1_id, {
				e: label,
				f: items,
				g: open,
				h: $wi__label && $panel_content__label__closures
			});
		}, $scope0_id, void 0, 1)
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
