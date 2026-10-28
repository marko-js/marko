// tags/card/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko !; ;<section></section>",
	"__tests__/tags/card/index.marko_1*shell": "__tests__/tags/card/index.marko_1*shell;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_item = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_item = _client_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4), $cg__input_content = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, { item: input.item }, 1, 0, 0, $wg__input_content__OR__input_item, $scope0_reason, 2, 0, 5);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/card/index.marko_1_input_content#0:4_input_item#0:5/init");
			_write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/card/index.marko_1*shell"], $scope0_reason, 4);
	_html(`</section>${_el_resume($scope0_id, "#section/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content,
		input_item: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.item
	}, "__tests__/tags/card/index.marko", 0, {
		input_content: ["input.content"],
		input_item: ["input.item"]
	}) || (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/card/index.marko_fill0/unpatched", input.content) : $cg__input_item && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card/index.marko_fill0", input.content, !_server_guard($scope0_reason, 5))), $cg__input_item && _content_withhold(input.content), _filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/card/index.marko_fill1/unpatched", input.item) : $cg__input_content && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card/index.marko_fill1", input.item, !_server_guard($scope0_reason, 6))), $cg__input_content && _content_withhold(input.item));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 1) << 9 | _mask_group($scope0_reason, 2) << 13);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({
		show: input.show,
		item: input.item,
		content: _content_resume("__tests__/template.marko_1*content", ({ item }) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", item.name.toUpperCase(), void 0, 4, 0)}</em>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "2:4");
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
