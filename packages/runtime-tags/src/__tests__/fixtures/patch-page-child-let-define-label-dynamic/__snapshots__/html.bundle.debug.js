// tags/wrap.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;D%;<div><!></div>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/outer.marko": "__tests__/tags/outer.marko;b%;<!><!><!>",
	"__tests__/tags/outer.marko_1*shell": "__tests__/tags/outer.marko_1*shell __tests__/tags/outer.marko_1_value_content#0:6/init;D%;<section><!></section>"
});
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let value = input.data;
	_first_value($scope0_id, "value", value, $scope0_reason, 0);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", value.content, {}, 2, 0, 0, 1, $scope0_reason, 0, "^value");
			_html("</section>");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_more, 1, 0, 0, ["__tests__/tags/outer.marko_1*shell"], $scope0_reason, 1);
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:value_content", value?.content, 1);
	_scope($scope0_id, { value_content: _unfilled_if($scope0_reason, 1) && value?.content }, "__tests__/tags/outer.marko", 0, { value_content: ["value.content", "1:6"] });
	$wg__input_more || _write_if($scope0_reason, 1) && _resume_branch($scope0_id);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&%c`)("b%c")};${((_w0) => `<!>${_w0}<!><!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_1_input_label#0:4/init" : "__tests__/template.marko_1_input_label#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 3) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		data: _patch_live($childScope, { content: Body.content }, $scope0_id, ""),
		more: input.more
	});
	_patch_child_end();
	_dynamic_tag($scope0_id, "#text/1", input.wrap && wrap_default, { content: Body.content }, 9, 0, 0, _write_guard($scope0_reason, 4), $scope0_reason, 4);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		Body_content: _unfilled_if($scope0_reason, 4) && Body?.content,
		"ClosureScopes:input_label/10": _write_if($scope0_reason, 2) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Body_content: ["Body.content", "2:9"]
	}) || _filled_guard($scope0_reason, 2) && (_content_withheld("__tests__/template.marko_1*content", $scope0_id) || _client_guard($scope0_reason, 0)) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
