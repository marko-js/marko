// layout.marko
const $template$3 = "<!><html><head><title>app</title></head><body><main><!></main></body></html>";
const $walks$3 = "bDbE%n";
_shells({ "__tests__/layout.marko": "__tests__/layout.marko;bDbE%;<!><html><head><title>app</title></head><body><main><!></main></body></html>" });
var layout_default = _template_patch("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<!doctype html><html><head><title>app</title>${_flush_head()}</head><body><main>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $wg__input_content, void 0, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</main>"), _trailers("</body></html>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/layout.marko", 0);
}, 1);

// page-a.css
var page_a_default$1 = ".a {\n  color: green;\n}\n";

// page-a.marko
const $template$2 = "<button class=a>a:<!></button>";
const $walks$2 = " Db%l";
_shells({ "__tests__/page-a.marko": "__tests__/page-a.marko !__tests__/page-a.marko_0; Db%;<button class=a>a:<!></button>" });
var page_a_default = _template_patch("__tests__/page-a.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=a>a:${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/page-a.marko_0");
	_patch_value($scope0_id, "__tests__/page-a.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/page-a.marko", 0, { count: "2:6" });
});

// page-b.marko
const $template$1 = "<button class=b>b:<!></button>";
const $walks$1 = " Db%l";
_shells({ "__tests__/page-b.marko": "__tests__/page-b.marko !__tests__/page-b.marko_0; Db%;<button class=b>b:<!></button>" });
var page_b_default = _template_patch("__tests__/page-b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=b>b:${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/page-b.marko_0");
	_patch_value($scope0_id, "__tests__/page-b.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/page-b.marko", 0, { count: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$3);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$3);
const $PageA_withLoadAssets = withLoadAssets(page_a_default, flush, "ready:__tests__/page-a.marko");
const $PageB_withLoadAssets = withLoadAssets(page_b_default, flush, "ready:__tests__/page-b.marko");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&`)($walks$3)};${((_w0) => `<!>${_w0}`)($template$3)}`)(),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)(),
	"__tests__/template.marko_3*shell": /*@__PURE__*/ (() => `__tests__/template.marko_3*shell;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_page__closures = new Set();
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope3);
	layout_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page <= 0) {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/1", $childScope);
				$PageA_withLoadAssets({});
				_scope($scope2_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				const $childScope2 = _peek_scope_id();
				_patch_child($scope3_id, "#childScope/1", $childScope2);
				$PageB_withLoadAssets({});
				_scope($scope3_id, { "#childScope/1": _existing_scope($childScope2) }, "__tests__/template.marko", "9:4");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_page, void 0, void 0, void 0, ["__tests__/template.marko_2*shell", "__tests__/template.marko_3*shell"], $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_page#0:3/init");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"));
		$wg__input_page || $scope0_page && _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_page/4": $input_page__closures,
		"#childScope/0": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0);
}, 1);
