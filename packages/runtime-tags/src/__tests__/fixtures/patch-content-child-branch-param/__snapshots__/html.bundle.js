// tags/card/index.marko
const $template = "<section></section>";
_shells({
	b: "b !; ;<section></section>",
	b0: "b0;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_item = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, { item: input.item }, 0, 0, $wg__input_content__OR__input_item, void 0, 1, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b1");
			_write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 4);
	_html(`</section>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.content,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.item
	}) : (_filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 4) || _client_guard($scope0_reason, 6)) && _patch_value($scope0_id, "vb2", input.content, !_server_guard($scope0_reason, 5)), (_client_guard($scope0_reason, 4) || _client_guard($scope0_reason, 6)) && _content_withhold(input.content), _filled_guard($scope0_reason, 6) && (_client_guard($scope0_reason, 4) || _client_guard($scope0_reason, 5)) && _patch_value($scope0_id, "vb3", input.item, !_server_guard($scope0_reason, 6)), (_client_guard($scope0_reason, 4) || _client_guard($scope0_reason, 5)) && _content_withhold(input.item));
});

// template.marko
_shells({
	a0: "a0,",
	a: /*@__PURE__*/ (() => `a;${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 1) << 9 | _mask_group($scope0_reason, 2) << 13);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({
		show: input.show,
		item: input.item,
		content: _content_resume("a0", ({ item }) => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", item.name.toUpperCase())}</em>`);
			_scope($scope1_id, {});
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
