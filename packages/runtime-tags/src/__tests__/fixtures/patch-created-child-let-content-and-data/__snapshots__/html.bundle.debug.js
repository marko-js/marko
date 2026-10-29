// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/outer.marko": "__tests__/tags/outer.marko !;b%;<!><!><!>",
	"__tests__/tags/outer.marko_1*shell": "__tests__/tags/outer.marko_1*shell __tests__/tags/outer.marko_1_value_content#0:6/init __tests__/tags/outer.marko_1_value_n#0:7/init;D%bD ;<section><!><b> </b></section>"
});
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 1), $wi__input_more = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let value = input.data;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", value.content, {});
			_html(`<b>${_text_resume($scope1_id, "#text/1", value.n)}</b></section>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_more, 1, 0, 0, ["__tests__/tags/outer.marko_1*shell"], $scope0_reason, 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", value, 1);
	_scope($scope0_id, {
		value_content: $wi__input_more && value?.content,
		value_n: $wi__input_more && value?.n
	}, "__tests__/tags/outer.marko", 0, {
		value_content: ["value.content", "1:6"],
		value_n: ["value.n", "1:6"]
	}) || _content_withhold(input.data);
	$wg__input_more || $wi__input_more && _resume_branch($scope0_id);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html("<em>body</em>");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 4) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({
				data: _patch_live($childScope, {
					content: Body.content,
					n: input.n
				}, $scope1_id, ">input_n"),
				more: input.more
			});
			_patch_child_end();
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "__tests__/template.marko_1_input_more#0:5/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_n#0:4_Body_content#0:7/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_n: _unfilled_if($scope0_reason, 2) && input.n,
		input_more: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.more,
		Body_content: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && Body?.content
	}, "__tests__/template.marko", 0, {
		input_n: ["input.n"],
		input_more: ["input.more"],
		Body_content: ["Body.content", "1:9"]
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.n, !_server_guard($scope0_reason, 3)), $cg__input_show && _content_withhold(input.n), _filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.more, !_server_guard($scope0_reason, 4)));
}, 1);
