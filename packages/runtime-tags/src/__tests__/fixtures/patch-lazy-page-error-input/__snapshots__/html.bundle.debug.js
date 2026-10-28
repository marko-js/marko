// page1.marko
const $template$2 = "<button> </button>";
const $walks$2 = " D l";
const $setup$2 = [[], ["__tests__/page1.marko_0"]];
_shells({ "__tests__/page1.marko": "__tests__/page1.marko !__tests__/page1.marko_0; D ;<button> </button>" });
var page1_default = _template("__tests__/page1.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/page1.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/page1.marko_fill0", n, 1);
	_scope($scope0_id, { n }, "__tests__/page1.marko", 0, { n: "1:6" });
});

// page2.marko
const $template$1 = "<h1> </h1>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/page2.marko": "__tests__/page2.marko;D ;<h1> </h1>" });
var page2_default = _template("__tests__/page2.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h1>${_text_resume($scope0_id, "#text/0", input.error.message, void 0, $scope0_reason, 0)}</h1>`);
	_scope($scope0_id, {}, "__tests__/page2.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Page1_withLoadAssets = withLoadAssets(() => page1_default, "__tests__/page1.marko", flush, "ready:__tests__/page1.marko");
const $Page2_withLoadAssets = withLoadAssets(() => page2_default, "__tests__/page2.marko", flush, "ready:__tests__/page2.marko");
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("D l")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.page === 1) {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id($scope2_id, "#childScope/1", 0);
			$Page1_withLoadAssets({});
			_patch_child_end();
			_scope($scope2_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "4:2");
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 0);
			$Page2_withLoadAssets({ error: input.error });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_error#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "5:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_page, void 0, void 0, void 0, ["__tests__/template.marko_2*shell", "__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_error: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.error }, "__tests__/template.marko", 0, { input_error: ["input.error"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.error, !_server_guard($scope0_reason, 1));
}, 1);
