// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/outer.marko_2*content": "__tests__/tags/outer.marko_2*content; ; ",
	"__tests__/tags/outer.marko": "__tests__/tags/outer.marko !;b%;<!><!><!>",
	"__tests__/tags/outer.marko_1*shell": "__tests__/tags/outer.marko_1*shell __tests__/tags/outer.marko_1_tag#0:6/init;b%;<!><!><!>"
});
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_more = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let tag = input.tag;
	_first_value($scope0_id, "tag", tag, $scope0_reason, 0);
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", tag, {}, 2, _content_resume("__tests__/tags/outer.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(_text_resume($scope2_id, "#text/0", input.label, 1, $scope0_reason, 2));
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/tags/outer.marko_2_input_label#0:5/init");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/outer.marko", "2:19"));
			}, $scope1_id), 0, 1, $scope0_reason, 0, "^tag");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_more, 1, 0, 0, ["__tests__/tags/outer.marko_1*shell"], $scope0_reason, 1);
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:tag", tag, 1);
	_scope($scope0_id, {
		input_label: input.label,
		tag: _unfilled_if($scope0_reason, 1) && tag,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		tag: "1:6"
	}) || _filled_guard($scope0_reason, 2) && _content_withheld("__tests__/tags/outer.marko_2*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
	$wg__input_more || _resume_branch($scope0_id);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		tag: input.alt ? "b" : "em",
		label: input.label,
		more: input.more
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
