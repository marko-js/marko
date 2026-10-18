// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({ "__tests__/tags/panel.marko": "__tests__/tags/panel.marko;b%;<!><!><!>" });
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_label__OR__input_items = _write_guard($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {
		label: input.label,
		items: input.items
	}, 0, 0, $wg__input_content__OR__input_label__OR__input_items, void 0, 1, $scope0_reason, 3);
	_patch_write($scope0_id, "PatchWrite:input_content", input.content, 1);
	_patch_write($scope0_id, "PatchWrite:input_label", input.label, 1);
	_patch_write($scope0_id, "PatchWrite:input_items", input.items, 1);
	_client_guard($scope0_reason, 3) && _patch_init($scope0_id, "__tests__/tags/panel.marko_0_input_content#3_input_label#4_input_items#5/init");
	$scope0_page ? _scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.content,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.label,
		input_items: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.items
	}, "__tests__/tags/panel.marko", 0, {
		input_content: ["input.content"],
		input_label: ["input.label"],
		input_items: ["input.items"]
	}) : (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill0", input.content, !_server_guard($scope0_reason, 4)), _client_guard($scope0_reason, 2) && _content_withhold(input.content), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill1", input.label, !_server_guard($scope0_reason, 5)), _client_guard($scope0_reason, 1) && _content_withhold(input.label), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/panel.marko_fill2", input.items, !_server_guard($scope0_reason, 6)), _client_guard($scope0_reason, 0) && _content_withhold(input.items));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1,",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 1) << 11 | _mask_group($scope0_reason, 2) << 13);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	panel_default({
		label: input.label,
		items: input.items,
		content: _content_resume("__tests__/template.marko_1*content", ({ label, items }) => {
			const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0), $wg__items = _write_guard($scope1_reason, 1), $wi__label = _write_if($scope1_reason, 0);
			const $scope1_id = _scope_id();
			const $panel_content__label__closures = new Set();
			_patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill0", label);
			_patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", items);
			let open = true;
			if ($scope0_page) _if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					if ($scope0_page) _if(() => {
						if (label) {
							const $scope3_id = _scope_id();
							_html(`<p>${_text_resume($scope3_id, "#text/0", label, $wg__label)}</p>`);
							_subscribe($wi__label && $panel_content__label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:6"));
							return 0;
						}
					}, $scope2_id, "#text/0", $wg__label, $wg__label, 0, 0, 1);
					_html("<ul>");
					if ($scope0_page) _for_of(items, (item) => {
						const $scope4_id = _scope_id();
						_html(`<li>${_text_resume($scope4_id, "#text/0", item, $wg__items)}</li>`);
						_write_if($scope1_reason, 1) && _scope($scope4_id, {}, "__tests__/template.marko", "8:8");
					}, 0, $scope2_id, "#ul/1", $wg__items, $wg__items, $wg__items, "</ul>", 1);
					_scope($scope2_id, {}, "__tests__/template.marko", "3:4");
					return 0;
				}
			}, $scope1_id, "#text/0");
			_html(`<button>toggle</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill2", open, 1);
			_scope($scope1_id, {
				label,
				items,
				open,
				"ClosureScopes:label/7": $wi__label && $panel_content__label__closures
			}, "__tests__/template.marko", "1:2", {
				label: "1:10",
				items: "1:17",
				open: "2:8"
			});
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
