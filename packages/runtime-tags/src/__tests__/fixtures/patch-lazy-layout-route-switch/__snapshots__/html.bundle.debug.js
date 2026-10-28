// layout.marko
const $template$3 = "<nav><!></nav><main><!></main>";
const $walks$3 = "D%lD%l";
const $setup$3 = [[], []];
_shells({
	"__tests__/layout.marko_1*content": "__tests__/layout.marko_1*content;b%;<!><!><!>",
	"__tests__/layout.marko_0_#text#0/await": "__tests__/layout.marko_0_#text#0/await;b%;<!><!><!>",
	"__tests__/layout.marko": "__tests__/layout.marko;D%lD%;<nav><!></nav><main><!></main>",
	"__tests__/layout.marko_2*shell": "__tests__/layout.marko_2*shell;D ;<a> </a>"
});
var layout_default = _template("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_await($scope0_id, "#text/0", input.list, (list) => {
		const $scope1_id = _scope_id();
		_for_of(list, (item) => {
			const $scope2_id = _scope_id();
			_html(`<a>${_text_resume($scope2_id, "#text/0", item, void 0, $scope0_reason, 0)}</a>`);
			_scope($scope2_id, {}, "__tests__/layout.marko", "3:6");
		}, 0, $scope1_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/layout.marko_2*shell", $scope0_reason, 0);
		_scope($scope1_id, {}, "__tests__/layout.marko", "2:4");
	}, 1, "__tests__/layout.marko_1*content", 1);
	_html("</nav><main>");
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, {}, "__tests__/layout.marko", 0);
});

// page-a.marko
const $template$2 = "<h1>A</h1>";
const $walks$2 = "b";
const $setup$2 = [[], []];
_shells({ "__tests__/page-a.marko": "__tests__/page-a.marko,<h1>A</h1>" });
var page_a_default = _template("__tests__/page-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<h1>A</h1>");
});

// page-b.marko
const $template$1 = "<h1>B</h1>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/page-b.marko": "__tests__/page-b.marko,<h1>B</h1>" });
var page_b_default = _template("__tests__/page-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<h1>B</h1>");
});

// template.marko
const $template = "<html><body><!></body></html>";
const $walks = "E%m";
const $Layout_withLoadAssets = withLoadAssets(() => layout_default, "__tests__/layout.marko", flush, "ready:__tests__/layout.marko");
const $PageA_withLoadAssets = withLoadAssets(() => page_a_default, "__tests__/page-a.marko", flush, "ready:__tests__/page-a.marko");
const $PageB_withLoadAssets = withLoadAssets(() => page_b_default, "__tests__/page-b.marko", flush, "ready:__tests__/page-b.marko");
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !;E%;<html><body><!></body></html>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$3]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$3)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$3)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell,<p>home</p>",
	"__tests__/template.marko_4*shell": /*@__PURE__*/ (() => `__tests__/template.marko_4*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)(),
	"__tests__/template.marko_5*shell": /*@__PURE__*/ (() => `__tests__/template.marko_5*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 1), $wi__input_page = _write_if($scope0_reason, 1), $cg__input_page = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_page__closures = new Set();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.page === 0) {
			const $scope3_id = _scope_id();
			_html("<p>home</p>");
			$wi__input_page && _scope($scope3_id, {}, "__tests__/template.marko", "7:6");
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope3 = _patch_child($scope1_id, "#childScope/1", 1);
			$Layout_withLoadAssets({
				list: input.list,
				content: _content_elide("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.page === 1) {
							const $scope4_id = _scope_id();
							const $childScope = _patch_child($scope4_id, "#childScope/1", 0);
							$PageA_withLoadAssets({});
							_patch_child_end();
							_scope($scope4_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "12:10");
							return 0;
						} else {
							const $scope5_id = _scope_id();
							const $childScope2 = _patch_child($scope5_id, "#childScope/1", 0);
							$PageB_withLoadAssets({});
							_patch_child_end();
							_scope($scope5_id, { "#childScope/1": _existing_scope($childScope2) }, "__tests__/template.marko", "15:10");
							return 1;
						}
					}, $scope2_id, "#text/0", 1, $wg__input_page, void 0, void 0, void 0, ["__tests__/template.marko_4*shell", "__tests__/template.marko_5*shell"], $scope0_reason, 1);
					$cg__input_page && _patch_init($scope2_id, "__tests__/template.marko_2_input_page#0:3/init");
					$wi__input_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_page__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "11:8"));
					$wg__input_page || $wi__input_page && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_list#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope3)
			}, "__tests__/template.marko", "10:6");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_page, void 0, void 0, void 0, ["__tests__/template.marko_3*shell", "__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_trailers("</body></html>");
	_scope($scope0_id, {
		input_list: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.list,
		"ClosureScopes:input_page/5": $wi__input_page && _unfilled_if($scope0_reason, 1) && $input_page__closures
	}, "__tests__/template.marko", 0, { input_list: ["input.list"] }) || _filled_guard($scope0_reason, 2) && $cg__input_page && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.list, !_server_guard($scope0_reason, 2));
}, 1);
