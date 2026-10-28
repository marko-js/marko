// layout.marko
const $template$3 = "<!><html><head><title>app</title></head><body><main><!></main></body></html>";
const $walks$3 = "bDbE%n";
const $setup$3 = [[], []];
_shells({ "__tests__/layout.marko": "__tests__/layout.marko;bDbE%;<!><html><head><title>app</title></head><body><main><!></main></body></html>" });
var layout_default = _template("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<!doctype html><html><head><title>app</title>${_flush_head()}</head><body><main>`);
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</main>"), _trailers("</body></html>");
	_scope($scope0_id, {}, "__tests__/layout.marko", 0);
}, 1);

// page-a.css
var page_a_default$1 = ".a {\n  color: green;\n}\n";

// page-a.marko
const $template$2 = "<button class=a>a:<!></button>";
const $walks$2 = " Db%l";
const $setup$2 = [[], ["__tests__/page-a.marko_0"]];
_shells({ "__tests__/page-a.marko": "__tests__/page-a.marko !__tests__/page-a.marko_0; Db%;<button class=a>a:<!></button>" });
var page_a_default = _template("__tests__/page-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=a>a:${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/page-a.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/page-a.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/page-a.marko", 0, { count: "2:6" });
});

// page-b.marko
const $template$1 = "<button class=b>b:<!></button>";
const $walks$1 = " Db%l";
const $setup$1 = [[], ["__tests__/page-b.marko_0"]];
_shells({ "__tests__/page-b.marko": "__tests__/page-b.marko !__tests__/page-b.marko_0; Db%;<button class=b>b:<!></button>" });
var page_b_default = _template("__tests__/page-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=b>b:${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/page-b.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/page-b.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/page-b.marko", 0, { count: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$3);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$3);
const $PageA_withLoadAssets = withLoadAssets(() => page_a_default, "__tests__/page-a.marko", flush, "ready:__tests__/page-a.marko");
const $PageB_withLoadAssets = withLoadAssets(() => page_b_default, "__tests__/page-b.marko", flush, "ready:__tests__/page-b.marko");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$3]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$3)};${((_w0) => `<!>${_w0}`)($template$3)}`)(),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)(),
	"__tests__/template.marko_3*shell": /*@__PURE__*/ (() => `__tests__/template.marko_3*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 0), $wi__input_page = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_page__closures = new Set();
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	layout_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page <= 0) {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id($scope2_id, "#childScope/1", 0);
				$PageA_withLoadAssets({});
				_patch_child_end();
				_scope($scope2_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				const $childScope2 = _peek_scope_id($scope3_id, "#childScope/1", 0);
				$PageB_withLoadAssets({});
				_patch_child_end();
				_scope($scope3_id, { "#childScope/1": _existing_scope($childScope2) }, "__tests__/template.marko", "9:4");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_page, 1, 0, 0, ["__tests__/template.marko_2*shell", "__tests__/template.marko_3*shell"], $scope0_reason, 0);
		$wi__input_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_page#0:3/subscribe", $wg__input_page);
		$wg__input_page || $wi__input_page && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_page/4": $wi__input_page && _unfilled_if($scope0_reason, 0) && $input_page__closures,
		"#childScope/0": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0);
}, 1);
