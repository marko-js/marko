// tags/b-tag.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/b-tag.marko": "__tests__/tags/b-tag.marko;b%;<!><!><!>",
	"__tests__/tags/b-tag.marko_1*shell": "__tests__/tags/b-tag.marko_1*shell;b1bD ;<!><!><em> </em>"
});
var b_tag_default = _template("__tests__/tags/b-tag.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.n > 0) {
			const $scope1_id = _scope_id();
			const $atag_scope = _peek_scope_id();
			let x = _dynamic_tag($scope1_id, "#text/0", a_tag_default, { n: input.n - 1 }, 1, void 0, void 0, void 0, $scope0_reason, 0, void 0, void 0, void 0, "__tests__/tags/b-tag.marko_1_x#3/var");
			_var($scope1_id, "#scopeOffset/1", $atag_scope, "__tests__/tags/b-tag.marko_1_x#3/var");
			_html(`<em>${_text_resume($scope1_id, "#text/2", x)}</em>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/b-tag.marko_1_input_n#0:3/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/b-tag.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_n, void 0, void 0, void 0, ["__tests__/tags/b-tag.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/b-tag.marko", 0);
});

// tags/a-tag.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<span>a<!></span>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/1>", $setup$2]);
_shells({ "__tests__/tags/a-tag.marko": /*@__PURE__*/ (() => `^__tests__/tags/a-tag.marko${_shell_marker($setup$1)};${((_w0) => `Db%l/${_w0}&b`)("b%c")};${((_w0) => `<span>a<!></span>${_w0}<!>`)($template$2)}`)() });
var a_tag_default = _template("__tests__/tags/a-tag.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>a${_patch_text($scope0_id, "#text/0", input.n, 2, $scope0_reason, 0)}</span>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	b_tag_default({ n: input.n });
	_patch_child_end();
	const $return = input.n * 10;
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/a-tag.marko", 0);
	return $return;
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			a_tag_default({ n: input.n });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_n#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_n: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.n }, "__tests__/template.marko", 0, { input_n: ["input.n"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.n, !_server_guard($scope0_reason, 1));
}, 1);
