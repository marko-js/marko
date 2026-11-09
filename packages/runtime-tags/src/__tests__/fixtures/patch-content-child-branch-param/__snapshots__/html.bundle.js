// tags/card/index.marko
const $template = "<section></section>";
const $setup$1 = [[], []];
_shells({
	b: "b; ;<section></section>",
	b1: "b1;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_item = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 4), $ui__input_content__OR__input_item = _unfilled_if($scope0_reason, 2), $ui__input_show__OR__input_item = _unfilled_if($scope0_reason, 1), $ui__input_show__OR__input_content = _unfilled_if($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 5), $fg__input_item = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, { item: input.item }, 1, 0, 0, $wg__input_content__OR__input_item, $scope0_reason, 2, 0, 5);
			_patch_render($scope1_id, "b0", [_filled_guard($scope0_reason, 5) && ">e", _filled_guard($scope0_reason, 6) && ">f"], $scope0_reason, 2);
			_write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 4);
	_html(`</section>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_content && $cg__input_show && _patch_render($scope0_id, "b2", "e");
	$fg__input_item && $cg__input_show && _patch_render($scope0_id, "b3", "f");
	_scope($scope0_id, {
		e: ($ui__input_show__OR__input_item || $ui__input_content__OR__input_item) && input.content,
		f: ($ui__input_show__OR__input_content || $ui__input_content__OR__input_item) && input.item
	}) || ($fg__input_content && $ui__input_show__OR__input_item && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 5)), $fg__input_item && $ui__input_show__OR__input_content && _patch_write($scope0_id, "xf", input.item, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a0: "a0;D ;<em> </em>",
	a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_show__OR__input_item = _updates_from($scope0_reason, 0), $uf__input_show = _updates_from($scope0_reason, 1), $uf__input_item = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason($uf__input_show << 1 | $uf__input_show__OR__input_item << 3 | $uf__input_item << 5 | $uf__input_show__OR__input_item << 7 | $uf__input_show << 9 | $uf__input_item << 13);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		show: input.show,
		item: input.item,
		content: _content_resume("a0", ({ item }) => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", item.name.toUpperCase(), 1, 4, 0)}</em>`);
			_scope($scope1_id, {});
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
