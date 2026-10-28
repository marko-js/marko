// tags/card.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/card.marko": "__tests__/tags/card.marko !;b%;<!><!><!>",
	"__tests__/tags/card.marko_1*shell": "__tests__/tags/card.marko_1*shell;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_c = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.c, {}, 2, 0, 0, $wg__input_c, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/card.marko_1_input_c#0:4/init");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/card.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, { input_c: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.c }, "__tests__/tags/card.marko", 0, { input_c: ["input.c"] }) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.c, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.c));
});

// tags/one.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/one.marko": "__tests__/tags/one.marko !;b%;<!><!><!>" });
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_Tag__OR__input_content__OR__input_show = _write_guard($scope0_reason, 3), $cg__input_content__OR__input_show = _client_guard($scope0_reason, 2), $cg__input_Tag__OR__input_show = _client_guard($scope0_reason, 1), $cg__input_Tag__OR__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.Tag, {
		c: input.content,
		show: input.show
	}, 1, 0, 0, $wg__input_Tag__OR__input_content__OR__input_show, $scope0_reason, 3, 0, 4);
	_client_guard($scope0_reason, 3) && _patch_init($scope0_id, "__tests__/tags/one.marko_0_input_Tag#3_input_content#4_input_show#5/init");
	_scope($scope0_id, {
		input_Tag: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.Tag,
		input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.content,
		input_show: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.show
	}, "__tests__/tags/one.marko", 0, {
		input_Tag: ["input.Tag"],
		input_content: ["input.content"],
		input_show: ["input.show"]
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_content__OR__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/one.marko_fill0", input.Tag, !_server_guard($scope0_reason, 4)), $cg__input_content__OR__input_show && _content_withhold(input.Tag), _filled_guard($scope0_reason, 5) && $cg__input_Tag__OR__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/one.marko_fill1", input.content, !_server_guard($scope0_reason, 5)), $cg__input_Tag__OR__input_show && _content_withhold(input.content), _filled_guard($scope0_reason, 6) && $cg__input_Tag__OR__input_content && _patch_fill($scope0_id, "PatchFill:__tests__/tags/one.marko_fill2", input.show, !_server_guard($scope0_reason, 6)), $cg__input_Tag__OR__input_content && _content_withhold(input.show));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;A<!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 1) << 13);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	one_default({
		Tag: card_default,
		show: input.x === 1,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "#text/0", input.y, 2, $scope0_reason, 2)}`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_1_input_y#0:4/init" : "__tests__/template.marko_1_input_y#0:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_y__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_y: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.y,
		"ClosureScopes:input_y/5": _write_if($scope0_reason, 2) && $input_y__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_y: ["input.y"] }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.y, !_server_guard($scope0_reason, 2));
}, 1);
