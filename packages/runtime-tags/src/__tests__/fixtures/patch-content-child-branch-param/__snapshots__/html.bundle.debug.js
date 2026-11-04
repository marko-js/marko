// tags/card/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko; ;<section></section>",
	"__tests__/tags/card/index.marko_1*shell": "__tests__/tags/card/index.marko_1*shell;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_item = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 4), $ui__input_content__OR__input_item = _unfilled_if($scope0_reason, 2), $ui__input_show__OR__input_item = _unfilled_if($scope0_reason, 1), $ui__input_show__OR__input_content = _unfilled_if($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 5), $fg__input_item = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, { item: input.item }, 1, 0, 0, $wg__input_content__OR__input_item, $scope0_reason, 2, 0, 5);
			_patch_render($scope1_id, "__tests__/tags/card/index.marko_1_input_content#0:4_input_item#0:5/setup", ((_filled_guard($scope0_reason, 5) ? " >input_content" : "") + (_filled_guard($scope0_reason, 6) ? " >input_item" : "")).slice(1), $scope0_reason, 2);
			_write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/card/index.marko_1*shell"], $scope0_reason, 4);
	_html(`</section>${_el_mark($scope0_id, "#section/0", $wg__input_show)}`);
	$fg__input_content && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/card/index.marko_1_input_content#0:4/setup", "input_content");
	$fg__input_item && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/card/index.marko_1_input_item#0:5/setup", "input_item");
	_scope($scope0_id, {
		input_content: ($ui__input_show__OR__input_item || $ui__input_content__OR__input_item) && input.content,
		input_item: ($ui__input_show__OR__input_content || $ui__input_content__OR__input_item) && input.item
	}, "__tests__/tags/card/index.marko", 0, {
		input_content: ["input.content"],
		input_item: ["input.item"]
	}) || ($fg__input_content && $ui__input_show__OR__input_item && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 5)), $fg__input_item && $ui__input_show__OR__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_item", input.item, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_show__OR__input_item = _updates_from($scope0_reason, 0), $uf__input_show = _updates_from($scope0_reason, 1), $uf__input_item = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason($uf__input_show << 1 | $uf__input_show__OR__input_item << 3 | $uf__input_item << 5 | $uf__input_show__OR__input_item << 7 | $uf__input_show << 9 | $uf__input_item << 13);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({
		show: input.show,
		item: input.item,
		content: _content_resume("__tests__/template.marko_1*content", ({ item }) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "#text/0", item.name.toUpperCase(), 1, 4, 0)}</em>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "2:4");
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
