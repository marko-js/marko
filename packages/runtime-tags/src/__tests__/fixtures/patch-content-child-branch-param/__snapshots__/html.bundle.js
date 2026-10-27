// tags/card/index.marko
const $template = "<section></section>";
const $setup$1 = [[], []];
_shells({
	b: "b !; ;<section></section>",
	b1: "b1;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_item = _write_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_item = _client_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4), $cg__input_content = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, { item: input.item }, 1, 0, 0, $wg__input_content__OR__input_item, $scope0_reason, 2, 0, 5);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b0");
			$scope0_page && _write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b1"], $scope0_reason, 4);
	_html(`</section>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.item
	}) : (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "vb3", input.content) : $cg__input_item && _patch_fill($scope0_id, "vb2", input.content, !_server_guard($scope0_reason, 5))), $cg__input_item && _content_withhold(input.content), _filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "vb5", input.item) : $cg__input_content && _patch_fill($scope0_id, "vb4", input.item, !_server_guard($scope0_reason, 6))), $cg__input_content && _content_withhold(input.item));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0;D ;<em> </em>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 1) << 9 | _mask_group($scope0_reason, 2) << 13);
	const $childScope = _patch_child($scope0_id, "a", 0);
	card_default({
		show: input.show,
		item: input.item,
		content: _content_resume("a0", ({ item }) => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", item.name.toUpperCase())}</em>`);
			$scope1_page && _scope($scope1_id, {});
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
