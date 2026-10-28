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
			_html(`<a>${_text_resume($scope2_id, "#text/0", item, 1, $scope0_reason, 0)}</a>`);
			_scope($scope2_id, {}, "__tests__/layout.marko", "3:6");
		}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/layout.marko_2*shell", $scope0_reason, 0);
		_scope($scope1_id, {}, "__tests__/layout.marko", "2:4");
	}, 1, "__tests__/layout.marko_1*content", _unfilled_if($scope0_reason, 0) && 2, 1);
	_html("</nav><main>");
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, {}, "__tests__/layout.marko", 0);
});

// page-a.marko
const $template$2 = "<h1>A</h1><p> </p><!><button> </button>";
const $walks$2 = "bD l%b D l";
const $setup$2 = [[], ["__tests__/page-a.marko_0"]];
_shells({
	"__tests__/page-a.marko": "__tests__/page-a.marko !__tests__/page-a.marko_0;bD l%b D ;<h1>A</h1><p> </p><!><button> </button>",
	"__tests__/page-a.marko_1*shell": "__tests__/page-a.marko_1*shell,<p>wide</p>"
});
var page_a_default = _template("__tests__/page-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<h1>A</h1><p>${_text_resume($scope0_id, "#text/0", input.note, 1, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (input.wide) {
			const $scope1_id = _scope_id();
			_html("<p>wide</p>");
			_write_if($scope0_reason, 1) && _scope($scope1_id, {}, "__tests__/page-a.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/page-a.marko_1*shell"], $scope0_reason, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/3", n)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/page-a.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/page-a.marko_fill0", n, 1);
	_scope($scope0_id, { n }, "__tests__/page-a.marko", 0, { n: "1:6" });
});

// page-b.marko
const $template$1 = "<h1>B</h1><p> </p><!><!>";
const $walks$1 = "bD l%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/page-b.marko": "__tests__/page-b.marko;bD l%;<h1>B</h1><p> </p><!><!>",
	"__tests__/page-b.marko_1*shell": "__tests__/page-b.marko_1*shell,<p>wide</p>"
});
var page_b_default = _template("__tests__/page-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h1>B</h1><p>${_text_resume($scope0_id, "#text/0", input.note, 1, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (input.wide) {
			const $scope1_id = _scope_id();
			_html("<p>wide</p>");
			_write_if($scope0_reason, 1) && _scope($scope1_id, {}, "__tests__/page-b.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/page-b.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {}, "__tests__/page-b.marko", 0);
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
	"~__tests__/template.marko_2*content": "~__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !;E%;<html><body><!></body></html>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$3]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$3)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$3)}`)(),
	"__tests__/template.marko_3*shell": /*@__PURE__*/ (() => `__tests__/template.marko_3*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)(),
	"__tests__/template.marko_4*shell": /*@__PURE__*/ (() => `__tests__/template.marko_4*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)(),
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell,<p>home</p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_wide = _client_guard($scope0_reason, 4), $cg__input_note = _client_guard($scope0_reason, 5), $wi__input_page__OR__input_wide__OR__input_note = _write_if($scope0_reason, 0), $wg__input_page = _write_guard($scope0_reason, 2), $cg__input_page = _client_guard($scope0_reason, 2), $wi__input_wide = _write_if($scope0_reason, 4), $wi__input_note = _write_if($scope0_reason, 5), $wi__input_page = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_wide__closures = new Set();
	const $input_note__closures = new Set();
	const $input_page__closures = new Set();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.page === 0) {
			const $scope5_id = _scope_id();
			_html("<p>home</p>");
			$wi__input_page && _scope($scope5_id, {}, "__tests__/template.marko", "7:6");
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope3 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			$Layout_withLoadAssets({
				list: input.list,
				content: _content("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.page === 1) {
							const $scope3_id = _scope_id();
							_set_scope_reason(_mask_group($scope0_reason, 5) << 1 | _mask_group($scope0_reason, 4) << 3);
							const $childScope = _peek_scope_id($scope3_id, "#childScope/1", 0);
							$PageA_withLoadAssets({
								wide: input.wide,
								note: input.note
							});
							_patch_child_end();
							$cg__input_wide && _patch_init($scope3_id, "__tests__/template.marko_3_input_wide#0:5/init");
							$cg__input_note && _patch_init($scope3_id, "__tests__/template.marko_3_input_note#0:6/init");
							_subscribe(_unfilled_if($scope0_reason, 5) && $input_note__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_wide__closures, _scope($scope3_id, {
								_: $wi__input_page__OR__input_wide__OR__input_note && _scope_with_id($scope2_id),
								"#childScope/1": _existing_scope($childScope)
							}, "__tests__/template.marko", "12:10")));
							return 0;
						} else {
							const $scope4_id = _scope_id();
							_set_scope_reason(_mask_group($scope0_reason, 5) << 1 | _mask_group($scope0_reason, 4) << 3);
							const $childScope2 = _peek_scope_id($scope4_id, "#childScope/1", 0);
							$PageB_withLoadAssets({
								wide: input.wide,
								note: input.note
							});
							_patch_child_end();
							$cg__input_wide && _patch_init($scope4_id, "__tests__/template.marko_4_input_wide#0:5/init");
							$cg__input_note && _patch_init($scope4_id, "__tests__/template.marko_4_input_note#0:6/init");
							_subscribe(_unfilled_if($scope0_reason, 5) && $input_note__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_wide__closures, _scope($scope4_id, {
								_: $wi__input_page__OR__input_wide__OR__input_note && _scope_with_id($scope2_id),
								"#childScope/1": _existing_scope($childScope2),
								"ClosureSignalIndex:input_wide/9": $wi__input_wide && 1,
								"ClosureSignalIndex:input_note/10": $wi__input_note && 1
							}, "__tests__/template.marko", "15:10")));
							return 1;
						}
					}, $scope2_id, "#text/0", 1, $wg__input_page, 1, 0, 0, ["__tests__/template.marko_3*shell", "__tests__/template.marko_4*shell"], $scope0_reason, 2);
					$cg__input_page && _patch_init($scope2_id, "__tests__/template.marko_2_input_page#0:3/init");
					$wi__input_page__OR__input_wide__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 2) && $input_page__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "11:8"));
					$wg__input_page || $wi__input_page__OR__input_wide__OR__input_note && _resume_branch($scope2_id);
				}, $scope1_id, 1)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_list#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope3)
			}, "__tests__/template.marko", "10:6");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_page, 1, 0, 0, ["__tests__/template.marko_5*shell", "__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_trailers("</body></html>");
	_scope($scope0_id, {
		input_list: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.list,
		input_wide: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.wide,
		input_note: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 5)) && input.note,
		"ClosureScopes:input_wide/9": $wi__input_wide && _unfilled_if($scope0_reason, 4) && $input_wide__closures,
		"ClosureScopes:input_note/10": $wi__input_note && _unfilled_if($scope0_reason, 5) && $input_note__closures,
		"ClosureScopes:input_page/7": $wi__input_page && _unfilled_if($scope0_reason, 2) && $input_page__closures
	}, "__tests__/template.marko", 0, {
		input_list: ["input.list"],
		input_wide: ["input.wide"],
		input_note: ["input.note"]
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_page && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.list, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $cg__input_page && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.wide, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && $cg__input_page && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.note, !_server_guard($scope0_reason, 5)));
}, 1);
